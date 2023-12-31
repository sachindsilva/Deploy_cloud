import React from "react";
import Button from "./Button";

function ResourceGroup() {
    return (
        <div className="flex items-center flex-col border-1 mb-12 mt-4 h-[300px] p-8 justify-center rounded-3xl shadow-md bg-gradient-to-b from-blue-500 via-blue-400 to-violet-600 text-black shadow-sm shadow-violet-700  md:mx-6 md:h-[300px]">
            <p className="mb-4 ml-0 mr-0 text-2xl font-semibold text-center px-[30px]  ">ISE-Study Resources
                <span className="font-normal text-sm block">Whatsapp</span></p>
            <a href="https://chat.whatsapp.com/HZBHwsEBtpr5IWl4QAPv0V   "   >
                <Button buttonName="Click Here"/>
            </a>


        </div>
    );
}

export default ResourceGroup;