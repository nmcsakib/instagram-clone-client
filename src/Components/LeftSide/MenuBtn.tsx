import React from 'react';

const MenuBtn = ({children} : {children: React.ReactNode}) => {
    return (
       <a className="hover:bg-white/15 w-full px-5 py-2 rounded-xl text-lg flex items-center gap-3 cursor-pointer">
                      {children}
                      </a>
    );
};

export default MenuBtn;