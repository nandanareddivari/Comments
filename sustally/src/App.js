import React from "react";
import CommentList from "./Components/CommentList/CommentList";
import Comments from "./Components/Comment/Comments";

function App() {

  const comments = ["#sustally Great post!", "Awesome work #JTD", "Interesting topic #sustally","#JTD Nice","#sustally Nice Work"];
  const sustallyComments = comments.filter(comment => comment.includes('#sustally'));

  return (
    <div>
      <Comments/>
      <CommentList comments={sustallyComments}/>
    </div>
  );

}

export default App;