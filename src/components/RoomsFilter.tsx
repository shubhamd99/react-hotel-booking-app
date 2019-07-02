import React, { useContext } from 'react';
import { RoomContext } from '../store/context';
import { RoomsObject } from '../models/models';
import Title from './Title';
import Loading from './Loading';

interface IPropsRoomsFilter {
    rooms: any[];
}

// Get all unique items
const getUnique = (items: any[], value: any) => {
    return [...new Set(items.map(item => item[value]))]
}

// Another method of using context without HOC or provider
const RoomsFilter: React.FC<IPropsRoomsFilter> = ({rooms}) => {

    const context: RoomsObject | null = useContext(RoomContext);
    if (context) {
    const { handleChange, handleChecked, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;
    let types = getUnique(rooms, 'type');
    types = ['all', ...types];

    let people = getUnique(rooms, 'capacity');

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types.map((item: any, index: number) => {
                            return <option key={index} value={item}>{item}</option>
                        })}
                    </select>
                </div>
                {/* end of select type */}
                {/* guest */}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people.map((item: any, index: number) => {
                            return <option key={index} value={item}>{item}</option>
                        })}
                    </select>
                </div>
                {/* end of guest */}
                {/* rooms price */}
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input type="range" id="price" name="price" min={minPrice} max={maxPrice} value={price} onChange={handleChange} className="form-control"/>
                </div>
                {/* end of rooms price */}
                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                    </div>
                </div>
                {/* end of size */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChecked}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                     <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChecked}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
    } else {
        return <Loading />
    }
}

export default RoomsFilter;
