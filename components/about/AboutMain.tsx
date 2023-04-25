import Hero from "../common/Hero";
import Row from "../common/row/Row";
import CarouselRow from "../home/CarouselRow";

export default function AboutMain() {
  return (
    <>
      <Hero
        imgSrc="https://images.unsplash.com/photo-1569616758526-23def508da5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        hasContent={true}
        title="ABOUT US"
        imgAlt=""
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ab ducimus ullam laudantium suscipit voluptates."
      />

      <Row
        title="Infrastructure & Facilities"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, laudantium enim animi alias eaque soluta laborum nihil amet? Consequatur nihil magnam vero maxime nostrum veritatis commodi quae suscipit molestias temporibus accusantium tempore doloremque sed ea nesciunt deleniti, maiores ratione fugiat illum alias minima blanditiis odio debitis ab! Repudiandae cum deleniti at saepe omnis possimus rerum, sequi ipsam quaerat eaque assumenda in vel natus consectetur nesciunt repellat facere vero, reprehenderit quia libero nihil sint ut. Ab et quos ut eum aliquid ea voluptatem, repudiandae cupiditate cumque dolorum neque accusamus odit blanditiis! Quos dolore at facere magni delectus id officia, quam neque."
        imgSrc="https://images.unsplash.com/photo-1625065780765-ad4e242aa3a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <Row
        title="Quality"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, laudantium enim animi alias eaque soluta laborum nihil amet? Consequatur nihil magnam vero maxime nostrum veritatis commodi quae suscipit molestias temporibus accusantium tempore doloremque sed ea nesciunt deleniti, maiores ratione fugiat illum alias minima blanditiis odio debitis ab! Repudiandae cum deleniti at saepe omnis possimus rerum, sequi ipsam quaerat eaque assumenda in vel natus consectetur nesciunt repellat facere vero, reprehenderit quia libero nihil sint ut. Ab et quos ut eum aliquid ea voluptatem, repudiandae cupiditate cumque dolorum neque accusamus odit blanditiis! Quos dolore at facere magni delectus id officia, quam neque."
        imgSrc="https://images.unsplash.com/photo-1524292332709-b33366a7f165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        // isMirrored
        containerWrapperClassName="bg-gray-50"
      />
      <CarouselRow />
    </>
  );
}
