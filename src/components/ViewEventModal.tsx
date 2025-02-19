
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Trash2 } from 'lucide-react';
import { format } from 'date-fns';

export const ViewEventModal = ({ isOpen, onClose, event, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="event-modal" onClick={onClose}>
      <div 
        className="event-modal-content animate-in fade-in-50 slide-in-from-bottom-16 duration-300" 
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-semibold">Event Details</h2>
          <Button 
            variant="destructive" 
            size="icon"
            onClick={onDelete}
            className="h-8 w-8"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label className="text-sm text-muted-foreground">Title</Label>
            <p className="text-lg font-medium">{event.title}</p>
          </div>

          <div>
            <Label className="text-sm text-muted-foreground">Date & Time</Label>
            <p className="text-lg font-medium">
              {format(event.start, 'PPP')}
              {event.allDay ? ' (All day)' : ` at ${format(event.start, 'p')}`}
            </p>
          </div>

          {event.extendedProps.tag && (
            <div>
              <Label className="text-sm text-muted-foreground">Tag</Label>
              <p className="text-lg font-medium">{event.extendedProps.tag}</p>
            </div>
          )}

          <div className="pt-4 flex justify-end">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
