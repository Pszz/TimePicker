# TimePicker
A lightweight time input component for React that supports AM/PM

### Component Description

This is a custom time picker component with the following features:

1. Supports 24-hour time selection
2. Allows selection of hours, minutes, and seconds
3. Supports AM/PM switching
4. Includes a popup interface
5. Customizable trigger (via children prop)

### Main Features
- Time input with number validation
- Automatic formatting (zero-padding)
- Null value handling
- Complete time modification callback

### Usage Examples

```tsx
// Basic usage
import { TimePicker } from './TimePicker';

function App() {
  const [time, setTime] = useState<Date | null>(new Date());

  return (
    <TimePicker 
      value={time} 
      onChange={(newTime) => setTime(newTime)} 
    />
  );
}

// Custom trigger
function CustomExample() {
  const [time, setTime] = useState<Date | null>(new Date());

  return (
    <TimePicker 
      value={time} 
      onChange={(newTime) => setTime(newTime)}
    >
      <button>Select Time: {time?.toLocaleTimeString()}</button>
    </TimePicker>
  );
}

// Using in a form
function FormExample() {
  const [formData, setFormData] = useState({
    meetingTime: new Date(),
    title: ''
  });

  return (
    <form>
      <div>
        <label>Meeting Title:</label>
        <input 
          value={formData.title}
          onChange={e => setFormData(prev => ({...prev, title: e.target.value}))}
        />
      </div>
      <div>
        <label>Meeting Time:</label>
        <TimePicker 
          value={formData.meetingTime}
          onChange={(newTime) => setFormData(prev => ({
            ...prev, 
            meetingTime: newTime
          }))}
        />
      </div>
    </form>
  );
}
```

### Props Documentation

```typescript
type TimePickerProps = {
  value: Date | null;        // Current selected time value
  onChange?: (value: Date) => void;  // Callback function when time changes
  children?: React.ReactNode;  // Custom trigger element
}
```

### Important Notes

1. Ensure that the provided `value` is a valid Date object or null
2. Component requires `TimePicker.css` style file
3. Depends on `PeriodsPicker` and `Icons` components
4. Automatically handles invalid inputs and value range restrictions

This component is suitable for scenarios requiring precise time selection, such as:
- Meeting scheduling systems
- Calendar appointments
- Reminder settings
- Work planning

Could you please share the contents of `PeriodsPicker.tsx` so I can provide a more complete explanation of how these components work together?
