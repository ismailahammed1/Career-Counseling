import { useEffect } from "react";


const PageTitleUpdater = (title) => {
    useEffect(() => {
        document.title = title;
      }, [title]);
    };

export default PageTitleUpdater;
