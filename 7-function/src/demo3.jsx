import React from 'react'

const demo3 = () => {
    const changePage = (deltaY) => {
        if (deltaY > 0) {
            console.log('up');
        } else {
            console.log('down');
        }
    };

  return (
    <div onWheel={(e) => {
      changePage(e.deltaY);
    }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
    </div>
  )
}

export default demo3