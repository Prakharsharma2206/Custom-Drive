import React from "react";
import "../../styles/FileItem.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { db, storage } from "../../firebase";
import { ref, deleteObject } from "firebase";

import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import { DeleteForever } from "@material-ui/icons";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const FileItem = ({ id, caption, timestamp, fileUrl, size , useremail}) => {
  const fileDate = `${timestamp?.toDate().getDate()} ${
    monthNames[timestamp?.toDate().getMonth() + 1]
  } ${timestamp?.toDate().getFullYear()}`;

  const getReadableFileSizeString = (fileSizeInBytes) => {
    let i = -1;
    const byteUnits = [" kB", " MB", " GB", " TB", "PB", "EB", "ZB", "YB"];
    do {
      fileSizeInBytes = fileSizeInBytes / 1024;
      i++;
    } while (fileSizeInBytes > 1024);

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
  };



  const dlt = () => {
    db.collection(`${useremail}.encrypt`).doc(id).delete();
  };

  return (
    <div className="fileItem">
      <a href={fileUrl} download target="_blank">
        <div className="fileItem--left">
          <InsertDriveFileIcon />
          <p>{caption}</p>
        </div>
        <div className="fileItem--right">
          <p>{fileDate}</p>
          <p>{getReadableFileSizeString(size)}</p>
          <DeleteForever onClick={dlt} />
        </div>
      </a>
    </div>
  );
};

export default FileItem;
