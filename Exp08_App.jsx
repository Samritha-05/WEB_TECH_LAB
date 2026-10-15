document.title = "Student Dashboard";
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete Web Technology lab record', completed: false },
    { id: 2, text: 'Complete DBMS assignment', completed: false }
  ])

  const [courses, setCourses] = useState([
    { id: 'CS201', name: 'Web Technology', code: 'CS201', progress: 80, icon: '🌐' },
    { id: 'CS202', name: 'Database Management', code: 'CS202', progress: 65, icon: '💾' },
    { id: 'CS203', name: 'Data Structures & Engineering (DSE)', code: 'CS203', progress: 72, icon: '⚡' },
    { id: 'CS204', name: 'Quantum Technology', code: 'CS204', progress: 55, icon: '⚛️' }
  ])

  // Handlers
  const handleAddTask = (e) => {
    e.preventDefault()
    if (!taskText.trim()) return
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }])
    setTaskText('')
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const incrementProgress = (id) => {
    setCourses(courses.map(c => {
      if (c.id === id) {
        return { ...c, progress: Math.min(100, c.progress + 5) }
      }
      return c
    }))
  }

  const completedCount = tasks.filter(t => t.completed).length
  const taskProgress = tasks.length ? Math.round((completedCount / tasks.length) * 100) : 0

  // Theme Styles
  const bg = darkMode ? '#0f172a' : '#f8fafc'
  const cardBg = darkMode ? '#1e293b' : '#ffffff'
  const textPrimary = darkMode ? '#f8fafc' : '#0f172a'
  const textMuted = darkMode ? '#94a3b8' : '#64748b'
  const borderCol = darkMode ? '#334155' : '#f1f5f9'

  return (
    <div style={{ backgroundColor: bg, minHeight: '100vh', color: textPrimary, fontFamily: 'system-ui, -apple-system, sans-serif', transition: 'background-color 0.2s' }}>
      
      {/* 1. Navigation Bar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', backgroundColor: cardBg, borderBottom: `1px solid ${borderCol}` }}>
        <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#6366f1' }}>Academic Dashboard</div>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          style={{ padding: '8px 16px', borderRadius: '20px', border: `1px solid ${borderCol}`, cursor: 'pointer', backgroundColor: darkMode ? '#334155' : '#f1f5f9', color: textPrimary }}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </nav>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 20px' }}>
        
        {/* 2. Welcome Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '30px' }}>
          <div>
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#6366f1', letterSpacing: '1px' }}>STUDENT OVERVIEW</span>
            <h1 style={{ fontSize: '32px', margin: '6px 0', fontWeight: '800' }}>Welcome back, Samritha! 👋</h1>
            <p style={{ color: textMuted, margin: 0 }}>Keep Learning and Achieve your Goals.</p>
          </div>
          <div style={{ backgroundColor: cardBg, padding: '16px 20px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '28px' }}>📅</span>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Academic Dashboard</div>
              <div style={{ fontSize: '12px', color: textMuted }}>Your progress at a glance</div>
            </div>
          </div>
        </div>

        {/* 3. At least four Statistic Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          {[
            { label: 'Total Courses', val: courses.length, icon: '📚', color: '#eff6ff' },
            { label: 'Assignments', val: '5', icon: '📝', color: '#fef3c7' },
            { label: 'Attendance', val: '96%', icon: '📊', color: '#dcfce7' },
            { label: 'Current CGPA', val: '8.4', icon: '🏆', color: '#f3e8ff' }
          ].map((stat, i) => (
            <div key={i} style={{ backgroundColor: cardBg, padding: '20px', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: darkMode ? '#334155' : stat.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>
                {stat.icon}
              </div>
              <div>
                <div style={{ fontSize: '12px', color: textMuted }}>{stat.label}</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '2px' }}>{stat.val}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main 2-Column Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          
          {/* 4. Course list */}
          <div style={{ backgroundColor: cardBg, padding: '24px', borderRadius: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#6366f1', letterSpacing: '0.5px' }}>YOUR LEARNING</div>
                <h2 style={{ fontSize: '20px', margin: '4px 0 0 0' }}>My Courses</h2>
              </div>
              <span style={{ fontSize: '12px', padding: '4px 10px', backgroundColor: '#e0e7ff', color: '#4338ca', borderRadius: '12px', fontWeight: 'bold' }}>
                {courses.length} courses
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {courses.map((course) => (
                <div key={course.id} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: darkMode ? '#334155' : '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                    {course.icon}
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: '600', fontSize: '15px' }}>{course.name}</span>
                      <button 
                        onClick={() => incrementProgress(course.id)}
                        title="Click to add study progress"
                        style={{ border: 'none', background: 'none', color: '#6366f1', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}
                      >
                        +5%
                      </button>
                    </div>
                    <div style={{ fontSize: '12px', color: textMuted, marginBottom: '8px' }}>{course.code}</div>
                    
                    {/* Course Progress Bar */}
                    <div style={{ height: '6px', backgroundColor: darkMode ? '#334155' : '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${course.progress}%`, height: '100%', backgroundColor: '#6366f1', transition: 'width 0.3s' }}></div>
                    </div>
                    <div style={{ fontSize: '11px', color: textMuted, textAlign: 'center', marginTop: '4px' }}>
                      {course.progress}% completed
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Task input field & List */}
          <div style={{ backgroundColor: cardBg, padding: '24px', borderRadius: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#6366f1', letterSpacing: '0.5px' }}>STAY ORGANIZED</div>
                <h2 style={{ fontSize: '20px', margin: '4px 0 0 0' }}>My Tasks</h2>
              </div>
              <span style={{ fontSize: '12px', padding: '4px 10px', backgroundColor: '#e0e7ff', color: '#4338ca', borderRadius: '12px', fontWeight: 'bold' }}>
                {completedCount}/{tasks.length} done
              </span>
            </div>

            {/* Form Input Field */}
            <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
              <input
                type="text"
                placeholder="Enter a new task..."
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                style={{ flexGrow: 1, padding: '10px 14px', borderRadius: '10px', border: `1px solid ${borderCol}`, backgroundColor: darkMode ? '#0f172a' : '#f8fafc', color: textPrimary, outline: 'none' }}
              />
              <button 
                type="submit" 
                style={{ backgroundColor: '#6366f1', color: '#ffffff', border: 'none', padding: '10px 18px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                + Add
              </button>
            </form>

            {/* Task Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: 1 }}>
              {tasks.map((task) => (
                <div 
                  key={task.id} 
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', borderRadius: '10px', border: `1px solid ${borderCol}`, backgroundColor: darkMode ? '#0f172a' : '#ffffff' }}
                >
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', flexGrow: 1 }}>
                    <input 
                      type="checkbox" 
                      checked={task.completed} 
                      onChange={() => toggleTask(task.id)}
                      style={{ accentColor: '#6366f1', cursor: 'pointer' }}
                    />
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? textMuted : textPrimary, fontSize: '14px' }}>
                      {task.text}
                    </span>
                  </label>
                  <button 
                    onClick={() => deleteTask(task.id)}
                    style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '16px', padding: '0 4px' }}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Task Completion Bar */}
            <div style={{ marginTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: textMuted, marginBottom: '6px' }}>
                <span>Task completion</span>
                <span>{taskProgress}%</span>
              </div>
              <div style={{ height: '6px', backgroundColor: darkMode ? '#334155' : '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${taskProgress}%`, height: '100%', backgroundColor: '#6366f1', transition: 'width 0.3s' }}></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default App