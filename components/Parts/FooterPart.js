
export default function FooterPart({children}){
    return (
        <footer className="border-t border-text-light w-full h-[70px] fixed bottom-0 px-5 flex items-center bg-bg-dark z-40">
                <h6 className="text-text-light text-sm font-bold">©Copyright 2021 Pk-Glopak. All Rights Reserved</h6>
                {children}
        </footer>
    )
}