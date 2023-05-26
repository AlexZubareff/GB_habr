import React from "react";

export function AuthorBlock() {
    return (
        <>
            <div class="author-block">
                <div class="author-thumb">
                    <img src="images/news/author-02.jpg" alt="author-image" />
                </div>
                <div class="author-content">
                    <h3><a href="author.html">Lint Handson</a></h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quod molestias delectus illum quisquam.
                        Quasi iure perferendis suscipit officiis dicta!
                    </p>

                    <div class="authors-social">
                        <a href="#">
                            <i class="fa fa-facebook"></i>
                        </a>
                        <a href="#">
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i class="fa fa-google-plus"></i>
                        </a>
                        <a href="#">
                            <i class="fa fa-pinterest-p"></i>
                        </a>
                        <a href="#">
                            <i class="fa fa-dribbble"></i>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}