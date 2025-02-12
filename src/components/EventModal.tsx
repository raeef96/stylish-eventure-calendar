
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const EVENT_COLORS = [
  { label: 'Blue', value: '#6366f1' },
  { label: 'Green', value: '#22c55e' },
  { label: 'Red', value: '#ef4444' },
  { label: 'Yellow', value: '#eab308' },
  { label: 'Purple', value: '#a855f7' },
];

const EVENT_TAGS = [
  'Work', 'Personal', 'Family', 'Health', 'Social'
];

export const EventModal = ({ isOpen, onClose, onAdd, selectedDate }) => {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState(EVENT_COLORS[0].value);
  const [tag, setTag] = useState(EVENT_TAGS[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const event = {
      title,
      start: selectedDate?.startStr || new Date(),
      end: selectedDate?.endStr || new Date(),
      backgroundColor: color,
      borderColor: color,
      extendedProps: { tag },
    };

    onAdd(event);
    setTitle('');
  };

  if (!isOpen) return null;

  return (
    <div className="event-modal" onClick={onClose}>
      <div 
        className="event-modal-content animate-in fade-in-50 slide-in-from-bottom-16 duration-300" 
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold mb-4">Add New Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Event Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter event title"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label>Color</Label>
            <Select value={color} onValueChange={setColor}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {EVENT_COLORS.map((color) => (
                  <SelectItem key={color.value} value={color.value}>
                    <div className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded-full mr-2" 
                        style={{ backgroundColor: color.value }}
                      />
                      {color.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Tag</Label>
            <Select value={tag} onValueChange={setTag}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {EVENT_TAGS.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Add Event
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
