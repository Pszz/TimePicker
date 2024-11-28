import React from 'react';

export enum PeriodType {
  AM = 'AM',
  PM = 'PM'
}

type PeriodPickerProps = {
  value: PeriodType;
  onChange: (period: PeriodType) => void;
};

export const PeriodsPicker = ({ value, onChange }: PeriodPickerProps) => {
  return (
    <div className="periods-picker">
      <button
        className={`period-button ${value === PeriodType.AM ? 'active' : ''}`}
        onClick={() => onChange(PeriodType.AM)}
      >
        AM
      </button>
      <button
        className={`period-button ${value === PeriodType.PM ? 'active' : ''}`}
        onClick={() => onChange(PeriodType.PM)}
      >
        PM
      </button>
    </div>
  );
}
