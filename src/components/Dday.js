const schedule = require("node-schedule");

//00:00:00에 디데이 계산
const job = schedule.scheduleJob("0 0 0 * * 0-7", function () {
  function diffDay() {
    const masTime = new Date("2022-10-25");
    const todayTime = new Date();
    const diff = masTime - todayTime;

    const diffDay = String(Math.floor(diff / (1000 * 60 * 60 * 24)));
    const diffHour = String(
      Math.floor((diff / (1000 * 60 * 60)) % 24)
    ).padStart(2, "0");
    const diffMin = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
      2,
      "0"
    );
    const diffSec = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

    console.log(`${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`);
  }
  diffDay();
});

const Dday = () => {
  return (
    <section className="section3 section">
      <div className="container">
        <div className="dday">
          <h2>디데이</h2>
          <h2 align="center" style={{ color: "lightblue" }}>
            10월
          </h2>

          <table bgcolor="lightgrey" cellSpacing="21">
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>1</td>
                <td>2</td>
              </tr>

              <tr>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
              </tr>
              <tr>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
              </tr>
              <tr>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
                <td>22</td>
                <td>23</td>
              </tr>
              <tr>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
                <td>29</td>
                <td>30</td>
              </tr>
              <tr>
                <td>31</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Dday;
