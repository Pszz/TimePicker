import React, { useCallback, useEffect, useState } from 'react';
import { fixzero } from './utils';
import { PeriodsPicker, PeriodType } from './PeriodsPicker';
import { TimeIcon } from './Icons';
import './TimePicker.css';

export type TimePickerProps = {
  value: Date | null;
  onChange?: (value: Date) => void;
  children?: React.ReactNode;
};

type TimeInputProps = {
  label: string;
  value?: number;
  onChange?: (value: number) => void;
  max?: number;
};

const TimeInput = ({ label, value = 0, onChange, max = 59 }: TimeInputProps) => {
  const [tempValue, setTempValue] = useState<string>('00');

  useEffect(() => {
    setTempValue(fixzero(value, 2));
  }, [value]);

  return (
    <div className="time-input">
      <input
        value={tempValue}
        onChange={(ev) => {
          let val = ev.target.value.replace(/\D/g, '');
          if (Number(val) > max) {
            val = `${max}`;
          }
          setTempValue(val);
        }}
        onBlur={() => {
          onChange?.(Number(tempValue));
        }}
      />
      <span className="time-label">{label}</span>
    </div>
  );
};

export enum TimeType {
  Hours,
  Minutes,
  Seconds,
}

export const TimePicker = ({ value, onChange, children }: TimePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = useCallback(
    (type: TimeType, num: number) => {
      if (!value) return;
      
      const date = new Date(value);
      if (type === TimeType.Hours) {
        date.setHours(num);
      }
      if (type === TimeType.Minutes) {
        date.setMinutes(num);
      }
      if (type === TimeType.Seconds) {
        date.setSeconds(num);
      }

      onChange?.(date);
    },
    [onChange, value],
  );

  const formatTime = (date: Date | null) => {
    if (!date) return 'Choose the date first';
    return `${fixzero(date.getHours(), 2)}:${fixzero(date.getMinutes(), 2)}:${fixzero(date.getSeconds(), 2)}`;
  };

  return (
    <div className="time-picker">
      <div onClick={() => value && setIsOpen(true)}>
        {children || (
          <div className="time-picker-input">
            <TimeIcon className="time-picker-icon" />
            <span>{formatTime(value)}</span>
          </div>
        )}
      </div>
      
      {isOpen && (
        <div className="time-picker-popover">
          <div className="time-input-container">
            <TimeInput
              label="Hours"
              max={23}
              value={value?.getHours()}
              onChange={(hours) => handleChange(TimeType.Hours, hours)}
            />
            <span className="time-colon">:</span>
            <TimeInput
              label="Minutes"
              value={value?.getMinutes()}
              onChange={(minutes) => handleChange(TimeType.Minutes, minutes)}
            />
            <span className="time-colon">:</span>
            <TimeInput
              label="Seconds"
              value={value?.getSeconds()}
              onChange={(seconds) => handleChange(TimeType.Seconds, seconds)}
            />
            <PeriodsPicker
              onChange={(period) => {
                if (!value) return;
                const hours = value.getHours();
                const newHours = period === PeriodType.PM ? 
                  (hours % 12) + 12 : 
                  hours % 12;
                handleChange(TimeType.Hours, newHours);
              }}
              value={(value?.getHours() || 0) >= 12 ? PeriodType.PM : PeriodType.AM}
            />
          </div>

          <div className="button-group">
            <button 
              className="button"
              onClick={() => setIsOpen(false)}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
