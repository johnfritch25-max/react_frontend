import './styles/post-card.css';

export default function PostCard({ post }) {
    return (
        <div className="post-card">
            <h3 className="post-card__title">{post.title}</h3>
            <p className="post-card__body">{post.body}</p>
        </div>
    );
}
