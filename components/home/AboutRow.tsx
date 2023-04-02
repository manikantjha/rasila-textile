import React from "react";
import Row from "../common/row/Row";

export default function AboutRow() {
  return (
    <Row
      title="About Rasila Textile"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic accusantium consequatur asperiores reiciendis earum pariatur quidem culpa. Corrupti, excepturi nihil. Ab non libero reiciendis vel quae adipisci, eaque magnam soluta corporis sed. Ipsa aliquam, ducimus quia quidem iure eveniet minima praesentium iste? Impedit distinctio reprehenderit cumque pariatur totam incidunt dicta."
      imgSrc="https://images.unsplash.com/photo-1515630771457-09367d0ae038?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      containerWrapperClassName="bg-gray-50"
      rightColumnContainerClassName=" !justify-top"
    />
  );
}
