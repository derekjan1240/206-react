import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import axios from 'axios';

function test() {
    axios.get(`/api/content/topictree/edu_sheet/get_changes/${this.state.learningStage}`)
            .then((res) => {
                if (res.data.errors) {
                    this.setState({
                        loadingError: res.data.errors,
                        hasLoadingError: true,
                    });
                } else {
                    const apiDataBuffer = this.filtAllowedKindAndStatus(res.data);
                    const topicChangeCount = apiDataBuffer.topicChangeTable.length;
                    const contentChangeCount = apiDataBuffer.contentChangeTable.length;
                    swal.fire({
                        icon: 'success',
                        title: `載入了 ${topicChangeCount} 個資料夾變動，和 ${contentChangeCount} 個影片、習題變動！`,
                        confirmButtonText: 'OK',
                    });

                    this.setState({
                        topicChangeTable: apiDataBuffer.topicChangeTable,
                        contentChangeTable: apiDataBuffer.contentChangeTable,
                    });
                }
                this.setState({
                    isDisableLoadBtn: false,
                    isStartLoading: false,
                });
            }).catch(() => {
                this.setState({
                    loadingError: '執行變動時有 BUG，請洽工程師修正。',
                    hasLoadingError: true,
                    isDisableLoadBtn: false,
                });
            });
}

export default HookTest;
