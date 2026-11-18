'use client';

import { useState, useMemo } from 'react';

interface Course {
  id: string;
  name: string;
  credits: number;
  grade: string;
  type: 'regular' | 'honors' | 'ap';
}

const gradeMap: Record<string, number | null> = {
  'A+': 4.0,
  'A': 4.0,
  'A-': 3.7,
  'B+': 3.3,
  'B': 3.0,
  'B-': 2.7,
  'C+': 2.3,
  'C': 2.0,
  'C-': 1.7,
  'D+': 1.3,
  'D': 1.0,
  'D-': 0.7,
  'F': 0.0,
  'P': null,
  'NP': null,
  'W': null,
};

const getWeightedPoints = (baseGrade: number, type: Course['type'], weighted: boolean) => {
  if (!weighted) return baseGrade;
  const bonus = type === 'ap' ? 1 : type === 'honors' ? 0.5 : 0;
  return Math.min(baseGrade + bonus, 5);
};

export default function TargetGPACalculator() {
  const [currentGPA, setCurrentGPA] = useState<string>('');
  const [currentCredits, setCurrentCredits] = useState<string>('');
  const [targetGPA, setTargetGPA] = useState<string>('');
  const [upcomingCredits, setUpcomingCredits] = useState<string>('');
  const [courses, setCourses] = useState<Course[]>([]);
  const [showCourses, setShowCourses] = useState(false);
  const [weighted, setWeighted] = useState(false);

  const calculateResults = useMemo(() => {
    const currentGPAVal = Number(currentGPA);
    const currentCreditsVal = Number(currentCredits);
    const targetGPAVal = Number(targetGPA);
    const upcomingCreditsVal = Number(upcomingCredits);
    const scaleMaximum = weighted ? 5 : 4;

    if (
      !currentGPA.trim() ||
      !currentCredits.trim() ||
      !targetGPA.trim() ||
      !upcomingCredits.trim() ||
      !Number.isFinite(currentGPAVal) ||
      !Number.isFinite(currentCreditsVal) ||
      !Number.isFinite(targetGPAVal) ||
      !Number.isFinite(upcomingCreditsVal) ||
      currentGPAVal < 0 ||
      currentGPAVal > scaleMaximum ||
      currentCreditsVal < 0 ||
      targetGPAVal < 0 ||
      targetGPAVal > scaleMaximum ||
      upcomingCreditsVal <= 0
    ) {
      return { requiredGPA: null, projectedGPA: null, status: 'invalid', totalCredits: 0 };
    }

    const totalCredits = currentCreditsVal + upcomingCreditsVal;
    const requiredGPA = ((targetGPAVal * totalCredits) - (currentGPAVal * currentCreditsVal)) / upcomingCreditsVal;

    let projectedGPA: number | null = null;
    if (
      showCourses &&
      courses.length > 0 &&
      courses.every((course) =>
        gradeMap[course.grade] !== undefined &&
        Number.isFinite(course.credits) &&
        course.credits > 0
      )
    ) {
      const courseGradePoints = courses.reduce((sum, course) => {
        const basePoints = gradeMap[course.grade];
        if (basePoints === undefined || basePoints === null) return sum;
        return sum + (getWeightedPoints(basePoints, course.type, weighted) * course.credits);
      }, 0);
      const courseCredits = courses.reduce(
        (sum, course) => sum + (gradeMap[course.grade] === null ? 0 : course.credits),
        0
      );
      if (courseCredits > 0) {
        projectedGPA =
          ((currentGPAVal * currentCreditsVal) + courseGradePoints) /
          (currentCreditsVal + courseCredits);
      }
    }

    let status: 'achievable' | 'difficult' | 'impossible' | 'exceeded';
    if (requiredGPA > scaleMaximum) {
      status = 'impossible';
    } else if (requiredGPA > scaleMaximum - 0.3) {
      status = 'difficult';
    } else if (requiredGPA <= 0) {
      status = 'exceeded';
    } else {
      status = 'achievable';
    }

    return {
      requiredGPA: Math.max(0, requiredGPA),
      projectedGPA: projectedGPA === null ? null : Number(projectedGPA.toFixed(2)),
      status,
      totalCredits,
    };
  }, [currentGPA, currentCredits, targetGPA, upcomingCredits, courses, showCourses, weighted]);

  const addCourse = () => {
    setCourses(prev => [...prev, {
      id: Date.now().toString(),
      name: '',
      credits: 3,
      grade: '',
      type: 'regular',
    }]);
  };

  const updateCourse = (id: string, field: keyof Course, value: string | number) => {
    setCourses(prev => prev.map(course =>
      course.id === id ? { ...course, [field]: value } : course
    ));
  };

  const removeCourse = (id: string) => {
    setCourses(prev => prev.filter(course => course.id !== id));
  };

  const reset = () => {
    setCurrentGPA('');
    setCurrentCredits('');
    setTargetGPA('');
    setUpcomingCredits('');
    setCourses([]);
    setShowCourses(false);
    setWeighted(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'achievable': return 'text-green-600 bg-green-50 border-green-200';
      case 'difficult': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'impossible': return 'text-red-600 bg-red-50 border-red-200';
      case 'exceeded': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusMessage = (status: string) => {
    switch (status) {
      case 'achievable': return '✓ Goal is achievable with reasonable effort';
      case 'difficult': return '⚠ Challenging goal - requires mostly A grades';
      case 'impossible': return `✗ The required GPA exceeds the ${weighted ? '5.0 weighted' : '4.0'} scale used by this estimate`;
      case 'exceeded': return '★ Your target is below your current trajectory';
      default: return 'Enter valid values to see goal status';
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg border border-blue-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Target GPA Calculator</h2>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Real-Time</span>
      </div>

      {/* Main Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">Current GPA</label>
          <input
            type="number"
            step="0.01"
            min="0"
            max={weighted ? '5' : '4'}
            value={currentGPA}
            onChange={(e) => setCurrentGPA(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., 3.2"
          />
          <p className="text-xs text-gray-500 mt-1">Your current cumulative GPA (0-{weighted ? '5.0' : '4.0'})</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Credits</label>
          <input
            type="number"
            min="0"
            value={currentCredits}
            onChange={(e) => setCurrentCredits(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., 30"
          />
          <p className="text-xs text-gray-500 mt-1">Total credits completed so far</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">Target GPA</label>
          <input
            type="number"
            step="0.01"
            min="0"
            max={weighted ? '5' : '4'}
            value={targetGPA}
            onChange={(e) => setTargetGPA(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., 3.5"
          />
          <p className="text-xs text-gray-500 mt-1">Your desired GPA goal (0-{weighted ? '5.0' : '4.0'})</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">Upcoming GPA Credits</label>
          <input
            type="number"
            min="0"
            value={upcomingCredits}
            onChange={(e) => setUpcomingCredits(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., 10"
          />
          <p className="text-xs text-gray-500 mt-1">GPA-bearing credits only; exclude P/NP/W courses</p>
        </div>
      </div>

      <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={weighted}
            onChange={(e) => setWeighted(e.target.checked)}
            className="mt-1 w-4 h-4 text-blue-600 rounded"
          />
          <span className="text-sm text-amber-900">
            Estimate on a weighted scale (+0.5 Honors, +1.0 AP). Enter current and target GPAs on that same scale; actual school rules vary.
          </span>
        </label>
      </div>

      {/* Course List Toggle */}
      <div className="mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showCourses}
            onChange={(e) => setShowCourses(e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded"
          />
          <span className="text-sm font-medium text-gray-700">Add specific courses for detailed projection</span>
        </label>
      </div>

      {/* Course List */}
      {showCourses && (
        <div className="mb-6 bg-white p-4 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Upcoming Courses</h3>
          {courses.length === 0 && (
            <p className="text-sm text-gray-500 mb-3">Add your upcoming courses to see a detailed grade breakdown.</p>
          )}
          {courses.map((course, index) => (
            <div key={course.id} className="grid grid-cols-12 gap-2 mb-2 items-center">
              <div className="col-span-3">
                <input
                  type="text"
                  placeholder={`Course ${index + 1}`}
                  value={course.name}
                  onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="number"
                  min="1"
                  max="6"
                  value={course.credits}
                  onChange={(e) => updateCourse(course.id, 'credits', parseInt(e.target.value) || 1)}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                />
              </div>
              <div className={weighted ? 'col-span-4' : 'col-span-6'}>
                <select
                  value={course.grade}
                  onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                >
                  <option value="">Select a grade</option>
                  {Object.entries(gradeMap).map(([grade, points]) => (
                    <option key={grade} value={grade}>
                      {grade}{points === null ? ' (excluded from GPA)' : ` (${points.toFixed(1)})`}
                    </option>
                  ))}
                </select>
              </div>
              {weighted && (
                <div className="col-span-2">
                  <select
                    value={course.type}
                    onChange={(e) => updateCourse(course.id, 'type', e.target.value)}
                    aria-label={`Course ${index + 1} level`}
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                  >
                    <option value="regular">Regular</option>
                    <option value="honors">Honors (+0.5)</option>
                    <option value="ap">AP (+1.0)</option>
                  </select>
                </div>
              )}
              <div className="col-span-1">
                <button
                  onClick={() => removeCourse(course.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addCourse}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
          >
            + Add Course
          </button>
        </div>
      )}

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4 rounded-xl">
          <div className="text-sm opacity-90">Required GPA</div>
          <div className="text-3xl font-bold">{calculateResults.requiredGPA?.toFixed(2) ?? '—'}</div>
          <div className="text-xs mt-1 opacity-80">Needed in upcoming courses</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="text-sm text-gray-600">Projected GPA</div>
          <div className="text-2xl font-bold text-gray-900">{calculateResults.projectedGPA?.toFixed(2) ?? '—'}</div>
          <div className="text-xs text-gray-500 mt-1">Based on course estimates</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="text-sm text-gray-600">Total Credits</div>
          <div className="text-2xl font-bold text-gray-900">{calculateResults.totalCredits}</div>
          <div className="text-xs text-gray-500 mt-1">After upcoming semester</div>
        </div>
      </div>

      {/* Goal Status */}
      <div className={`p-4 rounded-xl border-2 ${getStatusColor(calculateResults.status)}`}>
        <div className="font-semibold">Goal Status: {calculateResults.status.charAt(0).toUpperCase() + calculateResults.status.slice(1)}</div>
        <p className="text-sm mt-1">{getStatusMessage(calculateResults.status)}</p>
      </div>

      {/* Formula Display */}
      <div className="mt-4 p-3 bg-slate-100 rounded-lg text-sm text-slate-700">
        <strong>Formula:</strong> Required GPA = (Target × Total Credits − Current GPA × Current Credits) ÷ Upcoming Credits
      </div>

      {/* Reset Button */}
      <div className="mt-4 flex gap-2">
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm hover:bg-gray-300"
        >
          Reset Calculator
        </button>
      </div>
    </div>
  );
}
