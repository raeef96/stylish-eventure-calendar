
import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';
import { EventModal } from './EventModal';
import { useToast } from '@/components/ui/use-toast';
import { ViewEventModal } from './ViewEventModal';

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { toast } = useToast();

  const handleDateSelect = (selectInfo) => {
    setSelectedDate(selectInfo);
    setShowEventModal(true);
  };

  const handleEventAdd = (event) => {
    const newEvent = {
      ...event,
      _originalEvent: event
    };
    setEvents([...events, newEvent]);
    setShowEventModal(false);
    toast({
      title: "Event created",
      description: "Your event has been successfully added to the calendar.",
      duration: 3000,
    });
  };

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setShowViewModal(true);
  };

  const handleEventDelete = () => {
    if (selectedEvent) {
      setEvents(events.filter(event => event.id !== selectedEvent.id));
      setShowViewModal(false);
      toast({
        title: "Event deleted",
        description: "The event has been successfully removed from your calendar.",
        duration: 3000,
      });
    }
  };

  return (
    <div className="relative px-2 sm:px-0">
      <div className="mb-4 flex justify-end">
        <Button onClick={() => setShowEventModal(true)} className="shadow-lg w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Add Event
        </Button>
      </div>
      <div className="bg-card rounded-xl shadow-xl p-2 sm:p-4 overflow-x-auto">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          editable={true}
          selectable={true}
          select={handleDateSelect}
          eventClick={handleEventClick}
          events={events}
          height="auto"
          windowResizeDelay={0}
          handleWindowResize={true}
        />
      </div>
      {showEventModal && (
        <EventModal
          isOpen={showEventModal}
          onClose={() => setShowEventModal(false)}
          onAdd={handleEventAdd}
          selectedDate={selectedDate}
        />
      )}
      {showViewModal && selectedEvent && (
        <ViewEventModal
          isOpen={showViewModal}
          onClose={() => setShowViewModal(false)}
          event={selectedEvent}
          onDelete={handleEventDelete}
        />
      )}
    </div>
  );
};

export default Calendar;
