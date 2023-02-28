import React, { useEffect, useState } from "react";
import { ProList } from "@ant-design/pro-components";
import { Button, Space, Tag, Popconfirm, message } from "antd";
import { blogDel, blogsList } from "@/api/blogs/blogsApi";
import BlogAdd from "@/pages/Blogs/BlogList/BlogAdd";

const BlogList = () => {
  const [dataSource, setData] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false); // 弹窗
  const [current, setCurrent] = useState<any>(null);
  useEffect(() => {
    handleAjax();
  }, []);

  // 初始化获取博客
  const handleAjax = () => {
    blogsList().then((res) => {
      setData(res.data);
    });
  };

  // 删除博客
  const confirm = (row: any) => {
    blogDel({
      id: row.id,
    }).then((res) => {
      if (res.error_code === 0) {
        message.success("删除成功");
        handleAjax();
      }
    });
  };

  // 博客弹窗
  const showOpen = (flag?: boolean, record?: any) => {
    setOpen(!!flag);
    setCurrent(record);
  };

  return (
    <>
      <ProList
        toolBarRender={() => {
          return [
            <Button key="add" type="primary" onClick={() => showOpen(true)}>
              新建
            </Button>,
          ];
        }}
        rowKey="id"
        headerTitle="博客列表"
        tooltip="基础列表的配置"
        dataSource={dataSource}
        showActions="hover"
        showExtra="hover"
        metas={{
          title: {
            dataIndex: "title",
          },
          avatar: {
            dataIndex: "author",
          },
          description: {
            dataIndex: "content",
          },
          subTitle: {
            render: (data, entity) => {
              return (
                <Space size={0}>
                  <Tag color="blue">{entity.author}</Tag>
                  <Tag color="#5BD8A6">TechUI</Tag>
                </Space>
              );
            },
          },
          actions: {
            render: (text, row) => [
              <a
                href={row.html_url}
                target="_blank"
                rel="noopener noreferrer"
                key="link"
              >
                链路
              </a>,
              <Popconfirm
                key="warning"
                title="是否删除当前博客?"
                onConfirm={() => confirm(row)}
                okText="确认"
                cancelText="取消"
              >
                <a href="#">删除</a>
              </Popconfirm>,
              <a key="view" onClick={() => showOpen(true, row)}>
                查看
              </a>,
            ],
          },
        }}
      />
      <BlogAdd
        open={open}
        onCancel={showOpen}
        handleAjax={handleAjax}
        current={current}
      />
    </>
  );
};

export default BlogList;
