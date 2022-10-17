import React, { ChangeEvent, useEffect, useState } from 'react';
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";

import { Chapter } from '../../models';
import './MapTimeline.css';


export type ChapterRange = { start: Chapter, end: Chapter };

const MapTimeline = (props: { chapters: Chapter[], callback: (range: ChapterRange) => void }) => {
  const { chapters, callback } = props;
  const [selectedRange, setSelectedRange] = useState<ChapterRange>({ start: chapters[0], end: chapters[0] });

  const changeChapterRange = (e: ChangeResult) => {
    const newResult = {
      start: chapters[e.minValue],
      end: chapters[e.maxValue]
    };
    setSelectedRange(newResult);
    callback(newResult);
  };

  return (
    <div className='container'>
      <MultiRangeSlider
        baseClassName='chapter-selector'
        labels={Array.from(new Set(chapters.map(c => (`Part ${c.part}`))))}
        min={0}
        max={chapters.length - 1}
        minValue={chapters.findIndex(c => (c.chapter === selectedRange.start.chapter))}
        maxValue={chapters.findIndex(c => (c.chapter === selectedRange.end.chapter))}
        step={1}
        subSteps={true}
        minCaption={selectedRange.start.altName ? selectedRange.start.altName : `Chapter ${selectedRange.start.chapter}`}
        maxCaption={selectedRange.end.altName ? selectedRange.end.altName : `Chapter ${selectedRange.end.chapter}`}
        onInput={changeChapterRange}
      />
    </div>
    
  );
}

export default MapTimeline;
