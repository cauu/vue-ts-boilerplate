<template>
  <div>
    <section class="content-head-wrapper">
      <Row>
        <Col span="22">
          <Breadcrumb>
            <Breadcrumb-item href="/dashboard">首页</Breadcrumb-item>
          </Breadcrumb>
        </Col>
        <Col span="2">
          <Button type="primary">
            创建内容
          </Button>
        </Col>
      </Row>
    </section>
    <section class="content-main-wrapper">
      <Table
        v-bind:columns="columns"
        :data="content"
        >
      </Table>
    </section>
  </div>
</template>

<style>
</style>

<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { State } from 'vuex-class'

  @Component
  export default class DashBoard extends Vue {
    content = [
      {
        id: 1,
        name: 'test'
      }
    ]

    columns:Array<any> = [
      {
        title: '序号',
        key: 'id'
      },
      {
        title: '名称',
        key: 'name'
      },
      {
        title: '操作',
        key: 'operation',
        width: 150,
        align: 'center',
        render(row, columns, index) {
          return (
            `
              <div>test</div>
            `
          )
        }
      }
    ]
  }
</script>
