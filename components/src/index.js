import React from 'react';
import ReactDOM from 'react-dom';
import faker from '@faker-js/faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45pm"
                    comment="Nice blog post!"
                    pic={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                author="Cem"
                timeAgo="Yesterday at 10:25pm"
                comment="This is really good."
                pic={faker.image.avatar()}
            />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                author="Jane"
                timeAgo="Today at 1:30pm"
                comment="What do you think?"
                pic={faker.image.avatar()}
            />
            </ApprovalCard>


        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));