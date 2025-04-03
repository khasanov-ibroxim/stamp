import { useState, useEffect } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CursorTrail = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isInsideSection, setIsInsideSection] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnterSection = () => {
            setIsInsideSection(true);
            document.body.style.cursor = "none";
        };

        const handleMouseLeaveSection = () => {
            setIsInsideSection(false);
            document.body.style.cursor = "default";
        };



        document.addEventListener("mousemove", handleMouseMove);

        const sections = document.querySelectorAll(".cursor_left_right");

        sections.forEach((section) => {
            section.addEventListener("mouseenter", handleMouseEnterSection);
            section.addEventListener("mouseleave", handleMouseLeaveSection);
        });


        return () => {
            document.removeEventListener("mousemove", handleMouseMove);

            sections.forEach((section) => {
                section.removeEventListener("mouseenter", handleMouseEnterSection);
                section.removeEventListener("mouseleave", handleMouseLeaveSection);
            });

        };
    }, []);

    const calculateColor = () => {
        const r = Math.min(255, Math.max(0, (position.x / window.innerWidth) * 255));
        const g = Math.min(255, Math.max(0, (position.y / window.innerHeight) * 255));
        const b = 255 - ((r + g) / 2); // Kontrast uchun

        // INVERT QILISH
        const invertedR = 255 - r;
        const invertedG = 255 - g;
        const invertedB = 255 - b;

        return `rgba(${Math.floor(invertedR)}, ${Math.floor(invertedG)}, ${Math.floor(invertedB)}, 0.7)`;
    };

    return (
        <div
            style={{
                position: "fixed",
                top: position.y - (isInsideSection  ? 50 : 5),
                left: position.x - (isInsideSection  ? 50 : 5),
                width: isInsideSection ? "auto" : "10px",
                height: isInsideSection ? "auto" : "10px",
                backgroundColor: isInsideSection  ? "rgb(0, 0, 0)" : calculateColor(),
                borderRadius: "50%",
                pointerEvents: "none",
                transition: "all 0.05s ease-in-out",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isInsideSection  ? "30px" : "0px",
                fontWeight: "bold",
                color: "#fff",
                zIndex: 9999,
                border: isInsideSection ? "2px solid #000" : "none",
                textAlign: "center",
                cursor: "none",
            }}
        >
            {isInsideSection  && (
                <span
                    style={{
                        padding: "20px 15px",
                        paddingLeft: "25px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 0
                    }}
                >
                    <ArrowBackIosIcon /> <ArrowForwardIosIcon />
                </span>
            )}


        </div>
    );
};

export default CursorTrail;
