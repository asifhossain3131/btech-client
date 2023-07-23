import CopyrightIcon from "@mui/icons-material/Copyright";
const Footer = () => {
  return (
    <footer className="bg-black text-white bg-opacity-80 p-4 flex items-center justify-center">
      <div className="flex gap-x-2 items-center">
        <CopyrightIcon></CopyrightIcon>
        <span>BTech preserves all rights</span>
      </div>
    </footer>
  );
};

export default Footer;
