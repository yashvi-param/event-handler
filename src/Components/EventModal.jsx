import React from 'react';

export default function EventModal({ show, event, onClose, onRegister, onDelete }) {
  if (!show || !event) return null;

  return (
    <div className="modal d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.45)' }}>
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div>
              <h5 className="modal-title">{event.title}</h5>
              <small className="text-muted">{event.category} · {event.date} · {event.time}</small>
            </div>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body d-flex gap-4">
            <div style={{minWidth:200}}>
              {event.image ? (
                <img src={event.image} alt={event.title} style={{width:'100%',height:160,objectFit:'cover',borderRadius:8}} />
              ) : (
                <div className="bg-light d-flex align-items-center justify-content-center" style={{height:160,borderRadius:8}}>
                  <div className="text-muted">No image</div>
                </div>
              )}
              <div className="mt-3">
                <div className={event.status === 'available' ? 'status-available' : 'status-out'}>{event.status === 'available' ? 'Available' : 'Out of stock'}</div>
              </div>
            </div>

            <div className="flex-grow-1">
              <p>{event.description}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Price:</strong> <span className="event-price">₹{event.price}</span></p>
              <p><strong>Attendees:</strong> {event.attendees ?? 0}</p>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
            <button type="button" className="btn btn-primary" onClick={() => onRegister(event.id)} disabled={event.status !== 'available'}>Register</button>
            <button type="button" className="btn btn-danger" onClick={() => onDelete(event.id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
