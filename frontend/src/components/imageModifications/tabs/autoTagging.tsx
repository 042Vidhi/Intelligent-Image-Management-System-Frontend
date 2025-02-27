import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface ImageData {
    file: File;
    tags: string[];
    caption: string[];
    size: number;
}

interface AutoTaggingProps {
    image: ImageData;
    setSelectedImage: React.Dispatch<React.SetStateAction<ImageData | null>>;
}


const AutoTagging: React.FC<AutoTaggingProps> = ({ image, setSelectedImage }) => {
    const [tags, setTags] = useState<string[]>(image.tags);
    const [newTag, setNewTag] = useState<string>('');

    useEffect(() => {
        setTags(image.tags);
    }, [image.tags]);

    const onCrossClickHandler = (indexToRemove: number) => {
        setSelectedImage(prevSelected => {
            if (!prevSelected) return prevSelected;
            return {
                ...prevSelected,
                tags: prevSelected.tags.filter((_, idx) => idx !== indexToRemove)
            };
        });
    };
    

    const onAddTagHandler = () => {
        if (!newTag.trim()) return;
        setSelectedImage(prevSelected => {
            if (!prevSelected) return prevSelected;
            return {
                ...prevSelected,
                tags: [...prevSelected.tags, newTag.trim()]
            };
        });
        setNewTag('');
    };
    

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onAddTagHandler();
        }
    };

    return (
        <>
            <div className="flex flex-row py-[22px] px-[35px] box-border text-[16px] border-b-[1px] border-gray cursor-pointer bg-[#FAFAFA] text-purple-dark font-medium">
                Auto Tagging
            </div>
            <div className="flex flex-row flex-wrap gap-x-[30px] gap-y-[22px] overflow-hidden transition-height duration-800 ease-in-out box-border text-[14px] text-[#253143] items-start h-auto py-[22px] px-[35px] border-b-[1px] border-gray">
                {/* Mapping over tags */}
                {tags?.map((tag, idx) => (
                    <div key={idx} className="flex flex-row rounded-[5px] bg-gray-200 px-[10px] py-[7px] font-medium box-border">
                        {tag}
                        <CloseIcon 
                            className="ml-[10px] cursor-pointer text-gray-600 hover:text-red-500 transition duration-200" 
                            onClick={() => onCrossClickHandler(idx)} 
                            fontSize="small"
                        />
                    </div>
                ))}
                {/* Input for new tag */}
                <div className="flex flex-row rounded-[5px] bg-purple-light px-[10px] py-[7px] font-medium border w-auto min-w-[15px]">
                    <input
                        type="text"
                        placeholder="Add tag"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-transparent outline-none border-none w-[60px]"
                    />
                    <AddCircleIcon 
                        className="ml-[10px] cursor-pointer text-gray-600 hover:text-red-500 transition duration-200" 
                        onClick={onAddTagHandler} 
                        fontSize="small"
                    />
                </div>
            </div>
        </>
    );
};

export default AutoTagging;
