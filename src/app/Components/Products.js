"use client"

import React, { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Image from 'next/image';



function Products() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filter, setFilter] = useState("");
    const [filterBy, setFilterBy] = useState("title");
    const [showFilter, setShowFilter] = useState(false);
    const [selectedRecommendations, setSelectedRecommendations] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(null); // Updated to null
    const [selectedOption, setSelectedOption] = useState({});
    const [limit , setLimit] = useState(2)
    const [pagewidth , setPageWidth] = useState(12/12)
    const [likedProducts, setLikedProducts] = useState({});
    const [selectedOptions, setSelectedOptions] = useState({
        idealFor: ["all"],
        occasion: ["all"],
        fabric: ["all"],
        segment: ["all"],
        suitableFor: ["all"],
        rawMaterials: ["all"],
        pattern: ["all"],
        jacketMaterial: ["all"],
        sleeveLength: ["all"],
        sleeve: ["all"],
    });
    const [width, setWidth] = useState(0)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data);
            })
            .catch((error) => console.error("Error fetching products:", error));

        // Fetch recommendations data
        fetch("https://fakestoreapi.com/recommendations")
            .then((response) => response.json())
            .then((data) => setRecommendations(data))
            .catch((error) =>
                console.error("Error fetching recommendations:", error)
            );
    }, []);

    const handleFilterChange = (event) => {
        const value = event.target.value.toLowerCase();
        setFilter(value);
        if (value === "") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) =>
                product[filterBy].toLowerCase().includes(value)
            );
            setFilteredProducts(filtered);
        }
    };

    const handleSelectChange = (event) => {
        const selectedFilterBy = event.target.value;
        setFilterBy(selectedFilterBy);
    };

    const toggleFilter = () => {
        const filter = showFilter ? false : true;
        setShowFilter(filter);
        const newWidth = showFilter ? 96 : 0;
        setWidth(newWidth);
    };

    const handleRecommendationsChange = (event) => {
        const value = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        );
        setSelectedRecommendations(value);
    };

    const toggleDropdown = (dropdown) => {
        // Updated function to accept a parameter
        setDropdownOpen(dropdownOpen === dropdown ? null : dropdown); // Toggle dropdown
    };

    const idealForCategories = [
        { category: 'IDEAL FOR', subcategories: ['Men', 'Women', 'Baby & Kids'] },
        { category: 'OCCASSION', subcategories: ['Men', 'Women', 'Baby & Kids'] },
        { category: 'WORK', subcategories: ['Men', 'Women', 'Baby & Kids'] },
        { category: 'FABRIC', subcategories: ['Men', 'Women', 'Baby & Kids'] },
        { category: 'SUITABLE FOR', subcategories: ['Men', 'Women', 'Baby & Kidsy'] },
        { category: 'RAW MATERIAL', subcategories: ['Men', 'Women', 'Baby & Kids'] },
        { category: 'PATTERN', subcategories: ['Men', 'Women', 'Baby & Kids'] },
    ];

    const handleCheckboxChange = (category, option) => {
        const newSelectedOption = { ...selectedOption };
    
        if (!newSelectedOption[category]) {
            newSelectedOption[category] = [];
        }
    
        const index = newSelectedOption[category].indexOf(option);
        if (index === -1) {
            newSelectedOption[category].push(option);
        } else {
            newSelectedOption[category].splice(index, 1);
        }
    
        setSelectedOptions(newSelectedOption);
    };
    const handleUnselectAll = (category) => {
        const newSelectedOptions = { ...selectedOptions };
    
        if (newSelectedOptions[category]) {
            newSelectedOptions[category] = [];
            setSelectedOptions(newSelectedOptions);
        }
    };

    const mobileFilter = () => {
        setShowFilter(!showFilter)
        
        setPageWidth(7/12)

        // const newLimit = limit == 2 ? 1: 2;
        // setLimit(newLimit)


    }

    const toggleLike = (productId) => {
        setLikedProducts(prevLikedProducts => ({
            ...prevLikedProducts,
            [productId]: !prevLikedProducts[productId]
        }));
    };

    return (
        <div className="flex flex-col h-fit justify-center items-center">
            <div className=" h-fit flex justify-between px-8 w-11/12 items-center border-y-2 bg-white sticky top-0">
                <div className="lg:flex hidden h-16 items-center font-bold">
                    <span> {filteredProducts.length} ITEMS</span>
                    <span className="text-gray p-8 cursor-pointer" onClick={toggleFilter}>
                        {showFilter ? "<    HIDE Filters" : ">    SHOW Filters"}
                    </span>
                </div>
                <div className="lg:hidden flex items-center font-bold h-16  cursor-pointer" onClick={mobileFilter}>
                    FILTER
                </div>



                <div>
                    <select className=" outline-none font-bold cursor-pointer space-y-4">
                        <option value="">RECOMMENDED</option>
                        <option value="newest">Newest First</option>
                        <option value="popular">Popular</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                    </select>
                </div>
            </div>

            <div className="flex">
                {showFilter &&

                    <div className="overflow-hidden transition-all duration-500 bg-white w-60 cursor-pointer lg:ml-14 ml-0 lg:px-0 px-4">
                        <div className="flex py-4 border-b-2 gap-2">
                            <input
                                type="checkbox"
                                id="all"
                                name="idealFor"
                                value="All"
                                onChange={() => handleCheckboxChange("idealFor", "all")}
                                // checked={`selectedOptions.${item.category}.includes("all")`}
                            />
                            <label className="font-bold text-lg" htmlFor="">Customizable</label>
                        </div>
                        
                        {idealForCategories.map((item, index)=>(
                            <div key={index}>
                                    <div onClick={() => toggleDropdown(`${item.category}`)} className="cursor-pointer pt-6">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-lg">{item.category}</span>
                                    <span className="">
                                        {dropdownOpen === `${item.category}` ? (
                                            <FaAngleUp />
                                        ) : (
                                            <FaAngleDown />
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="">
                                <input
                                    type="checkbox"
                                    id="all"
                                    name={item.category}
                                    value="All"
                                    onChange={() => handleCheckboxChange(`${item.category}`, "all")}
                                    checked={`selectedOptions.${item.category}.includes("all")`}
                                />
                                <label htmlFor="all">All</label>
                            </div>
                            {dropdownOpen === `${item.category}` && (
                                <div className="flex flex-col gap-4">
                                    <p className="cursor-pointer text-slate-400 underline"  onClick={() => handleUnselectAll(item.category)}>Unselect ALL</p>
                                    <div className="flex gap-2">
                                        <input
                                            type="checkbox"
                                            id={item.category.subcategories}
                                            name={item.category}
                                            value="Men"
                                            onChange={() => handleCheckboxChange(item.category, 'Men')}                                            
                                            checked={`selectedOptions.${item.category}.includes(${item.category.subcategories})`}/>
                                        <label htmlFor="men">{item.category.subcategories}Men (60)</label>
                                    </div>
                                    <div className="flex gap-2">
                                        <input
                                            type="checkbox"
                                            id={item.category.subcategories}
                                            name={item.category}
                                            value="Women"
                                            onChange={() => handleCheckboxChange(item.category, 'Women')} 
                                            checked={`selectedOptions.${item.category}.includes(${item.category.subcategories})`}
                                        />
                                        <label htmlFor="women">{item.category.subcategories} Women (63)</label>
                                    </div>
                                    <div className="flex gap-2">
                                        <input
                                            type="checkbox"
                                            id={item.category.subcategories}
                                            name={item.category}
                                            value="BabyKids"
                                            onChange={() => handleCheckboxChange(item.category, 'Baby & Kids')} 
                                            checked={`selectedOptions.${item.category}.includes(${item.category.subcategories})`}
                                        />
                                        <label htmlFor="babyKids">{item.category.subcategories} Baby & Kids (59)</label>
                                    </div>
                                </div>
                              )} 
                            </div>
                        ))}
                    </div>
                }
                <div className={`lg:w-full w-${pagewidth} p-0 flex justify-center items-center overflow-hidden`}>
               
                    <div className={`grid ${showFilter ? 'grid-cols-1' : 'grid-cols-2'} lg:grid-cols-4`}>
                    {/* <div className="grid grid-cols-2 lg:grid-cols-4"> */}
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="lg:w-60 w-full  lg:m-8  m-2 px-8  "
                            >
<img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-52"
                />                                <h3 className=" py-4 font-bold w-48 cursor-pointer h-16 line-clamp-2 pr-6">{product.title}</h3>
                                <div className="flex justify-between pr-6 items-center">
                                    <p className="">{product.category}</p> <span></span>
                                    <span onClick={() => toggleLike(product.id)}>
                                        {likedProducts[product.id] ? (
                                            <AiFillHeart className="h-6 w-6 text-red-500 cursor-pointer" />
                                            ) : (
                                            <AiOutlineHeart className="h-6 w-6 cursor-pointer" />
                                        )}
                                    </span>
                                </div>

                            </div>
                        ))}
                    </div>
                 
                </div>
            </div>
        </div>
    );
}

export default Products;
