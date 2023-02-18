export const Shape = ({ color }) => {
    return (
        <div className="absolute bottom-[-1px]  z-10 w-full">
            <svg viewBox="0 0 2000 540" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 60L83 120C167 180 333 300 500 350C667 400 833 380 1000 330C1167 280 1333 200 1500 140C1667 80 1833 40 1917 20L2000 0V540H1917C1833 540 1667 540 1500 540C1333 540 1167 540 1000 540C833 540 667 540 500 540C333 540 167 540 83 540H0V60Z" fill={color} />
            </svg>
        </div>
    )
}