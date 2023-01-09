import React from "react";
import "./EditImages.css";

function EditImages() {
  return (
    <div className="EditImages">
      <div className="InnerTable">
        <table>
          <tbody>
            <tr>
              <th>Image</th>
              <th>Action</th>
            </tr>
            <tr>
              <th>
                <img src="https://via.placeholder.com/150" alt="placeholder" />
              </th>
              <th>
                <button>
                  <i className="fas fa-save"></i>
                </button>
                <button>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </th>
            </tr>
            <tr>
              <th>
                <img src="https://via.placeholder.com/150" alt="placeholder" />
              </th>
              <th>
                <button>
                  <i className="fas fa-save"></i>
                </button>
                <button>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </th>
            </tr>
            <tr>
              <th>
                <img src="https://via.placeholder.com/150" alt="placeholder" />
              </th>
              <th>
                <button>
                  <i className="fas fa-save"></i>
                </button>
                <button>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </th>
            </tr>
            <tr>
              <th>
                <img src="https://via.placeholder.com/150" alt="placeholder" />
              </th>
              <th>
                <button>
                  <i className="fas fa-save"></i>
                </button>
                <button>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </th>
            </tr>
            <tr>
              <th>
                <img src="https://via.placeholder.com/150" alt="placeholder" />
              </th>
              <th>
                <button>
                  <i className="fas fa-save"></i>
                </button>
                <button>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EditImages;
