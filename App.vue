<template>
    <div id="box">
        <h2>welcome to Vue</h2>
        <ul>
            <li><a v-link="{path:'/home'}">主页</a></li>
            <li><a v-link="{path:'/news'}">新闻页</a></li>
        </ul>
    </div>
	    <div>
	    	<router-view></router-view>
	    </div>
    
</template>
<script>
    //  export default{
    //      data : {
    //          arr :["apple","orange","banana"]
    //      }
    //  }
</script>
<style>
    h2{
        font-size: 22px;
        font-family:"微软雅黑";
        color: red;
    }
    a{
        text-decoration: none;
        color: #333;
        padding: 10px;
        border: 1px solid green;
    }
    li{
        list-style: none;
        float: left;
        
    }
</style>