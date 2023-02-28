import React, { FC, useEffect } from "react";
import { Modal, Form, Input, message } from "antd";
import { blogNew, blogUpdate } from "@/api/blogs/blogsApi";

const BlogAdd: FC<{
  open: boolean;
  onCancel: (data?: any) => void;
  handleAjax: () => void;
  current?: any;
}> = ({ open, onCancel, handleAjax, current }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (current) {
      form.setFieldsValue({
        ...current,
      });
    }
  }, [current]);

  const onOk = () => {
    form.validateFields().then((value) => {
      const ajax = current
        ? blogUpdate({
            ...value,
            id: current.id,
          })
        : blogNew(value);
      ajax.then((res) => {
        if (res.error_code === 0) {
          message.success("保存成功");
          onCancel();
          handleAjax();
        }
      });
    });
  };

  return (
    <Modal
      title={current ? "编辑博客" : "新建博客"}
      open={open}
      onOk={onOk}
      onCancel={() => onCancel(false)}
    >
      <Form form={form}>
        <Form.Item
          label="标题"
          name="title"
          rules={[{ required: true, message: "请输入标题" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="内容"
          name="content"
          rules={[{ required: true, message: "请输入内容" }]}
        >
          <Input.TextArea rows={4} placeholder="博客内容" maxLength={6} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BlogAdd;
