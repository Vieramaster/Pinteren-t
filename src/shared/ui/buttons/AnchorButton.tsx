import { Link, type LinkProps } from "react-router";

export const AnchorButton = ({ ...props }: LinkProps) => (
  <Link
    {...props}
    className="bg-brand text-surface  
                h-12 px-4 hidden  rounded-2xl 
                md:grid  place-content-center 
                font-semibold  duration-200 cursor-pointer  
                hover:opacity-95 active:translate-y-0.5"
  >
    {props.children}
  </Link>
);
