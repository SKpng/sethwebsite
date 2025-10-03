"use client"

export function Resume() {
  return (
    <section id="resume" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Resume & Credits</h2>
        <p className="section-subtitle">
          Professional experience across theater, film, and television
        </p>
        
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <a href="#" className="button button-primary">
            Download Full Resume (PDF)
          </a>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="card">
            <h3 className="card-title">Theater</h3>
            <div className="card-content">
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontWeight: '600', marginBottom: '4px' }}>The Merchant of Venice</h4>
                <p style={{ color: '#6b7280', marginBottom: '4px' }}>Bassanio • Globe Theatre • 2023</p>
                <p style={{ fontSize: '14px', color: '#9ca3af' }}>Directed by John Doe</p>
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontWeight: '600', marginBottom: '4px' }}>Hamlet</h4>
                <p style={{ color: '#6b7280', marginBottom: '4px' }}>Rosencrantz • National Theatre • 2022</p>
                <p style={{ fontSize: '14px', color: '#9ca3af' }}>Directed by Jane Smith</p>
              </div>
              
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '4px' }}>A Midsummer Night&apos;s Dream</h4>
                <p style={{ color: '#6b7280', marginBottom: '4px' }}>Lysander • Royal Shakespeare Company • 2021</p>
                <p style={{ fontSize: '14px', color: '#9ca3af' }}>Directed by Michael Johnson</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 className="card-title">Film & Television</h3>
            <div className="card-content">
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontWeight: '600', marginBottom: '4px' }}>City Lights</h4>
                <p style={{ color: '#6b7280', marginBottom: '4px' }}>Supporting Role • Independent Film • 2023</p>
                <p style={{ fontSize: '14px', color: '#9ca3af' }}>Directed by Sarah Wilson</p>
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontWeight: '600', marginBottom: '4px' }}>The Silent Echo</h4>
                <p style={{ color: '#6b7280', marginBottom: '4px' }}>Lead Role • Independent Film • 2024</p>
                <p style={{ fontSize: '14px', color: '#9ca3af' }}>Directed by David Brown</p>
              </div>
              
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '4px' }}>BBC Drama Series</h4>
                <p style={{ color: '#6b7280', marginBottom: '4px' }}>Guest Role • BBC One • 2022</p>
                <p style={{ fontSize: '14px', color: '#9ca3af' }}>Episode: &quot;The Truth Will Out&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}