import React from "react";
import PropTypes from "prop-types";
import { BiCommentDetail } from "react-icons/bi";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

function ForumPost({ post }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-start space-x-4">
        <img
          src={post.user.avatar}
          alt={`${post.user.name} Avatar`}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <h2 className="font-bold">{post.user.name}</h2>
              <span className="text-gray-500">{post.user.role}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 text-gray-600"></div>
              <div className="flex items-center space-x-1 text-gray-600"></div>
            </div>
          </div>
          <p className="mt-2">{post.content}</p>
          {post.products && (
            <div className="flex space-x-4 mt-4">
              {post.products.map((product, index) => (
                <div
                  key={index}
                  className="flex-1 border border-gray-300 rounded-lg p-4 flex flex-col items-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="mt-2 text-center">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-gray-500">{product.price}</p>
                    <div className="mt-2 bg-red-500 text-white px-4 py-1 rounded-full">
                      <Link to="/cart">Beli Sekarang</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex p-2 mt-10 space-x-2 items-center">
        <BiCommentDetail />
        <span>{post.comments}</span>
        <IoIosHeartEmpty />
        <span>{post.likes}</span>
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Tambahkan Komentar"
          className="w-full border border-gray-300 rounded-full px-4 py-2"
        />
      </div>
    </div>
  );
}

// Define PropTypes
ForumPost.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }).isRequired,
    comments: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default ForumPost;
