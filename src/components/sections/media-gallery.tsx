"use client"

export function MediaGallery() {
  return (
    <section id="media" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Media</h2>
        <p className="section-subtitle">
          Professional headshots and demo reels showcasing range and versatility
        </p>
        
        <div className="media-grid">
          <div className="media-item">
            <div className="media-placeholder">Headshot 1</div>
          </div>
          <div className="media-item">
            <div className="media-placeholder">Headshot 2</div>
          </div>
          <div className="media-item">
            <div className="media-placeholder">Headshot 3</div>
          </div>
          <div className="media-item">
            <div className="media-placeholder">Headshot 4</div>
          </div>
          <div className="media-item">
            <div className="media-placeholder">Headshot 5</div>
          </div>
          <div className="media-item">
            <div className="media-placeholder">Headshot 6</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="card">
            <h3 className="card-title">Theatrical Reel</h3>
            <div className="media-placeholder" style={{ aspectRatio: '16/9', marginBottom: '16px' }}>
              Demo Reel 1
            </div>
            <p className="card-content">
              Showcasing dramatic range and emotional depth in classical and contemporary roles
            </p>
          </div>
          
          <div className="card">
            <h3 className="card-title">Commercial Reel</h3>
            <div className="media-placeholder" style={{ aspectRatio: '16/9', marginBottom: '16px' }}>
              Demo Reel 2
            </div>
            <p className="card-content">
              Professional commercial work highlighting versatility and on-camera presence
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}