import React , {useState , useEffect } from "react";
import { db } from "../../firebase";
import FileItem from './FileItem'
import FileCard from './FileCard'
import "../../styles/FilesView.css"

function FilesView({useremail}) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    db.collection(`${useremail}.encrypt`).onSnapshot((snapshot) => {
      setFiles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, []);

  
  return (
    <div className="fileView">
      <div className="fileView__row">
        {
          files.slice(0,5).map(({id,item}) => (
            <FileCard name={item.caption} />
          ))
        }
      </div>
      <div className="filesView__titles">
        <div className="filesView__titles--left">
          <p>Name</p>
        </div>
        <div className="filesView__titles--right">
          <p>Last Modified</p>
          <p>Files size</p>
        </div>
      </div>
      {
                files.map(({ id, item }) => (
                    <FileItem id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} useremail={useremail}/>
                ))
            }
    </div>
  );
}

export default FilesView;
