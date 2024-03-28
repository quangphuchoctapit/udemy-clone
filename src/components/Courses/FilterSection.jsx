import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import FilterSectionDetails from './FilterSectionDetails';
import { filterData } from '../../utils/data/courses/filterData';


const FilterSection = () => {
    const defaultShowMoreCategories = {
        ratings: false,
        duration: false,
        level: false,
        price: false,
        subtitles: false,
    };

    const [showMoreCategories, setShowMoreCategories] = useState(defaultShowMoreCategories);

    const handleToggleShowMore = (type) => {
        setShowMoreCategories({ ...showMoreCategories, [type]: !showMoreCategories[type] });
    };

    return (
        <div className="flex flex-col gap-4 w-full">

            {/* ratings */}
            <FilterSectionDetails data={{ ...filterData?.ratings, handleToggleShowMore, type: 'ratings', isShowMore: showMoreCategories.ratings }} />

            {/* duration */}
            <FilterSectionDetails data={{ ...filterData?.duration, handleToggleShowMore, type: 'duration', isShowMore: showMoreCategories.duration }} />

            {/* level */}
            <FilterSectionDetails data={{ ...filterData?.level, handleToggleShowMore, type: 'level', isShowMore: showMoreCategories.level }} />

            {/* price */}
            <FilterSectionDetails data={{ ...filterData?.price, handleToggleShowMore, type: 'price', isShowMore: showMoreCategories.price }} />

            {/* subtitles */}
            <FilterSectionDetails data={{ ...filterData?.subtitles, handleToggleShowMore, type: 'subtitles', isShowMore: showMoreCategories.subtitles }} />
        </div>
    )
}

export default FilterSection
