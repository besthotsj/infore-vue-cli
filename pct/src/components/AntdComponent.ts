/*
 * @Author: tz
 * @Date: 2021-06-08 09:51:37
 * @LastEditors: tz
 * @LastEditTime: 2021-06-10 17:04:29
 * @Description: file content
 */
import { App } from 'vue'
import {
  Button,
  Input,
  InputNumber,
  Form,
  // Layout,
  // Breadcrumb,
  // Menu,
  message,
  // Card,
  Select,
  Pagination,
  Row,
  Col,
  // Tabs,
  // Checkbox,
  Switch,
  Divider,
  Modal,
  // Space,
  // Avatar,
  // Badge,
  // Tooltip,
  // Drawer,
  // Dropdown,
  // Tag,
  Popover,
  // Steps,
  // Radio,
  // Upload,
  Table,
  Spin,
  Empty,
  DatePicker,
  Collapse,
  Calendar
} from 'ant-design-vue'
// 导入全部图标，方便做动态图标
import * as antIcons from '@ant-design/icons-vue'
// import { createFromIconfontCN } from '@ant-design/icons-vue'

const AntdComponent = [
  Button,
  Input,
  Input.Search,
  Input.TextArea,
  InputNumber,
  Form,
  Form.Item,
  // Layout,
  // Layout.Header,
  // Layout.Footer,
  // Layout.Content,
  // Layout.Sider,
  // Breadcrumb,
  // Breadcrumb.Item,
  // Menu,
  // Menu.Item,
  // Menu.SubMenu,
  // Menu.ItemGroup,
  // Card,
  Select,
  Pagination,
  Row,
  Col,
  // Tabs,
  // Tabs.TabPane,
  // Checkbox,
  // Checkbox.Group,
  Switch,
  Divider,
  Modal,
  // Space,
  // Avatar,
  // Badge,
  // Tooltip,
  // Drawer,
  // Dropdown,
  // Tag,
  Popover,
  // Steps,
  // Radio,
  // Radio.Group,
  // Upload,
  Table,
  Spin,
  Empty,
  DatePicker,
  DatePicker.RangePicker,
  Collapse,
  Collapse.Panel,
  Calendar
]

const installOtherComponents = (app: App): void => {
  // 同时支持 composition api 和 options api 方式
  app.provide('message', message)
  app.config.globalProperties.$message = message

  // 注册组件
  Object.keys(antIcons).forEach(key => {
    app.component(key, antIcons)
  })
  // 添加到全局
  /* global */
  app.config.globalProperties.$antIcons = antIcons
}

export function registerGlobComp (app: App): void {
  installOtherComponents(app)

  AntdComponent.forEach(comp => {
    app.component(comp.name || comp.displayName, comp)
  })
}
