import React from 'react'

class ButtonPage extends React.Component {
    handleAdd = () => {
      alert('Thêm');
    };
  
    handleEdit = () => {
      alert('Sửa');
    };
  
    handleDelete = () => {
      alert('Xóa');
    };
  
    render() {
      return (
        <div>
          <button onClick={this.handleAdd}>Thêm</button>
          <button onClick={this.handleEdit}>Sửa</button>
          <button onClick={this.handleDelete}>Xóa</button>
        </div>
      );
    }
  }
  
  export default ButtonPage;
