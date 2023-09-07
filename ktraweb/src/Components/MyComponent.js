import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách các phần tử ban đầu khi component được tải
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('API_ENDPOINT/items');
      setItems(response.data);
    } catch (error) {
      console.error('Lỗi khi lấy danh sách các phần tử:', error);
    }
  };

  const addItem = async () => {
    const newItem = prompt('Nhập một phần tử mới:');
    if (newItem) {
      try {
        await axios.post('API_ENDPOINT/items', { item: newItem });
        fetchItems(); // Gọi lại API để cập nhật danh sách phần tử sau khi thêm thành công
      } catch (error) {
        console.error('Lỗi khi thêm phần tử:', error);
      }
    }
  };

  const editItem = async (index) => {
    const updatedItem = prompt('Chỉnh sửa phần tử:', items[index]);
    if (updatedItem) {
      try {
        await axios.put(`API_ENDPOINT/items/${index}`, { item: updatedItem });
        fetchItems(); // Gọi lại API để cập nhật danh sách phần tử sau khi chỉnh sửa thành công
      } catch (error) {
        console.error('Lỗi khi chỉnh sửa phần tử:', error);
      }
    }
  };

  const deleteItem = async (index) => {
    try {
      await axios.delete(`API_ENDPOINT/items/${index}`);
      fetchItems(); // Gọi lại API để cập nhật danh sách phần tử sau khi xóa thành công
    } catch (error) {
      console.error('Lỗi khi xóa phần tử:', error);
    }
  };

  return (
    <div>
      {/* Hiển thị danh sách items */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Các nút thêm, sửa, xóa */}
      <button onClick={addItem}>Thêm</button>
      <button onClick={() => editItem()}>Sửa</button>
      <button onClick={() => deleteItem()}>Xóa</button>
    </div>
  );
};

export default MyComponent;