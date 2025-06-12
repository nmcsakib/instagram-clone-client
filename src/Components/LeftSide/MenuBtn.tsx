import React from 'react';
import { Link } from 'react-router';

const MenuBtn = ({children, location} : {children: React.ReactNode, location: string}) => {
    return (
       <Link to={location} className="hover:bg-white/15 w-full px-5 py-2 rounded-xl text-lg flex items-center gap-3 cursor-pointer">
                      {children}
                      </Link>
    );
};

export default MenuBtn;