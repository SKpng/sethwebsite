"use client"

export function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">
          A versatile actor with a passion for storytelling and character development
        </p>
        
        <div className="grid grid-cols-2 gap-16">
          <div>
            <div className="card">
              <h3 className="card-title">Professional Bio</h3>
              <div className="card-content">
                <p>
                  Seth Karallis is a talented actor based in London, known for his compelling 
                  performances across theater, film, and television. With classical training 
                  and a natural ability to bring complex characters to life, Seth approaches 
                  each role with dedication and authenticity.
                </p>
                <br />
                <p>
                  His passion for storytelling drives his commitment to excellence in every 
                  project, whether it&apos;s a Shakespearean production or a contemporary film. 
                  Seth believes in the power of performance to connect audiences with the 
                  human experience.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="card">
              <h3 className="card-title">Training & Education</h3>
              <div className="card-content">
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Royal Academy of Dramatic Art (RADA)</h4>
                  <p style={{ color: '#6b7280', marginBottom: '4px' }}>BA (Hons) Acting • 2019</p>
                  <p style={{ fontSize: '14px', color: '#9ca3af' }}>
                    Intensive classical training in voice, movement, and character development
                  </p>
                </div>
                
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Guildhall School of Music & Drama</h4>
                  <p style={{ color: '#6b7280', marginBottom: '4px' }}>Summer Intensive • 2018</p>
                  <p style={{ fontSize: '14px', color: '#9ca3af' }}>
                    Advanced scene study and contemporary performance techniques
                  </p>
                </div>
                
                <div>
                  <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Special Skills</h4>
                  <p style={{ fontSize: '14px', color: '#6b7280' }}>
                    Fluent English • RP Accent • Stage Combat • Guitar • Piano
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}