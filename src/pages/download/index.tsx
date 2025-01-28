import React from 'react';
import { Button, Typography, Space, Row, Col } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import styles from './index.module.css';

const { Title, Paragraph } = Typography;

const DownloadPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Row justify="center" align="middle" className={styles.content}>
        <Col xs={24} sm={20} md={16} lg={12}>
          <Title level={1} className={styles.title}>
            下载我们的应用
          </Title>
          
          <Paragraph className={styles.description}>
            随时随地使用我们的应用，享受便捷服务
          </Paragraph>

          <Space size="large" className={styles.downloadButtons}>
            <Button type="primary" size="large" icon={<AndroidOutlined />}>
              Android 版本下载
            </Button>
          </Space>
          
          <Paragraph className={styles.notice}>
            iOS 版本即将推出，敬请期待
          </Paragraph>

          <div className={styles.qrcode}>
            {/* 这里可以添加二维码图片 */}
            <img src="/qrcode.png" alt="下载二维码" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DownloadPage; 