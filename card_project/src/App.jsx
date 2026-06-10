import React from 'react'
import Card from './component/card'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    companyName: "Google",
    datePosted: "1 day ago",
    position: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    salary: "$10/hr",
    location: "New York, USA"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACUCAMAAADPj7eyAAAA5FBMVEX/////uQH8/Px/ugDyUCL///0BpO////v5+fliYmJnZ2dqamrz8/MApu5tbW2Li4tycnIAofKx1Hrp6emsrKzT09P8//H9tAD7/fR1twDIyMjP7vr++uztUiv2Sxnj4+NaWlr8uaQPre75Xi/y/ve9vb2ZmZl7e3uhoaHo9/r+29WWyF17uyOo2vX/xVft9+D94Kb/vCL+zG/4l4TH4KdpwvJQUFD+9PH859z6oYa43JaszHv528zxNgD3RQf6YA6FyU/h8s/9XkePzmlzrQD3uK3L5MH74bLz451Gs/v/8tX/1YaK2vo8AAAF0UlEQVR4nO2ZiZrTNhCAjVqvZcnY2lreDQJWbouO7QE9DYWW3hd9//fpjGwnXpYjpBjYr/NzJD6ST79nNCPHWUYQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBLEneQ5/FzCW5cVTZ+RvaWz/mQLldgYsZwUrtuRZwdjVlYM4gR6byc/vFMtYZsXm6qqhXFbcLwrOMVLw3yY/2Sy4ylmZxv7g6wXf3X/46IMtj+5Bpr7tMR4MVo/vb/9wdvb48Rnyw4+bn24s+DmDEvMcnntgP1j6syYYuU9un70/c/bxnU9vvLflxj0sOfNoxqHwcYvj5mHDSx+E72HbzXXYV24xgCQ0irIXxPVFzFb83YgcW46JTS/84LxirOqMse9AWmKgOtN17TyyqgN4ZrWrDksqltmoxKDnrZXYU443Qkk9f8hIJZuK+7407LDhVbEsQ3AZa6vXKPM0e6Zl1ZRKNNU44SqfNrgfSjdPvSzb/ZtV04y84D1NVpZ1qmw621rtuxUzc285oWrRjaPvVI2Rw7RsJzXG2NJlKjdsV3LYVCKnPUbWGqquK4VZsR/sH7kQSj0OWIsQRMOXX3NhfLsayHZF6OLJXV0beOeE6tYyy15FrvFSWZRrpYy+bFpmfLTo0vmggm65i7EyTWNhTwyhiS16cOPhveEc9uoG9mIlil7VTYwRvtLDh9aVe/wiuSLJ9dEpofGqm6HpwLViepBw3VuoDaUsIWf9oKIYhMVqUQqoGAaMtOhLMXieVbruSzygK9NLpWRf9jW+9HYtt4Lh8msRuV/u/frZjt9QLh/lLBhBLkI5iW0jUK4MHeOxlCHqGEwWpapD03Qa9mjtlQgdzE/RONdozpwQwWsfZOmsb2rVeB8bhS/ty8d5oB2si+///uGCzR/f7Hh4kqfpAnK+ciXOkE5J046Rw+1OQN2DCNmWRSgzXVUZ8IEaWDkpIndSOvi4ZfCRYCrI0gAZXbm6dhXnWirH12wGRX7++ZLNn1/s+Avug7ZyFvKScQ1edoqc6vA/N34Ri3WN5UHL2uEVaUHDgtwYGVMLrI/Y4eAsU0vsIk6murIWcJ+d37x+fHQ9cXR0/PfJ3S93XHuQn0xzDsYY+6a1odeZ3UaOwzs79bcoFHhwL0Law6Addm0QkLWWQdVXLrULJ0uT5LAViNqs2eeKLL95dHx8NHH80ebu6bWZ09Mn2zkHckYoA8lms13kKmgK7dTqZjk5ymW+xEkXoKAEw7TACEM/dKp0GMckJ9eVy/MC5DBok9zJQu7a6a30G9IkVwXpIVJZZsNWrsE4JTk+yjEvVFoRswblYO4FKUKry5SsICcFRq520A7B2LDDbixel1xaW/bQtpjrYZ0CAdilJaRqrVm6e5nkYM6Ns8sqbIZYXyP4QNtODQ2KLVwNWKHMabmW2Z5yU+RgaK2qZWhHOT5XSxFcW7XOjmkJ68YgoS5WNmKsDByrtBAQ4rLWeF6N3zTPuVrqtuUvH+bqcjifYpmisogcdGkBq40GCucUOQ4dDRYeTS18y7T00WP1Z7BWxvNqbI4we5McXgffrNXER7njPeSGBgduylTtbRhALg64lG616vthADnfixbXZxXsGYZBpkQu4V2PfY+bph/6ofTQFTPT93iRKl3CmevKHW2L5fXLcumnPWY7m7qUTS8cNmGR2dkqbRgHd9Uct8cMg8POmXQQbrid69rUKlp4b8b3lR1vfasO9qyclmA1dbrLcsUexYxfqniLHfyZexe73kC1fLbck73k9v6liLFsPZdLTHPuaM7MQyL35kb7ikxyO1BuwX5puS/PDO+aTTzLz79dsvnnqwW3rvLDgjRyfr4gu7XgXpEeA11RQA6fwM0U0y3O9jBsXFm3MekWTxsZ/qqwfVzH8J7gna0XL4ctnz1ioc6Li1zdwGHoinyZlpdPuNJ6BEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBPE/4l+H8agPIa5ODQAAAABJRU5ErkJggg==",
    companyName: "Microsoft",
    datePosted: "2 days ago",
    position: "Backend Engineer",
    tag1: "Part Time",
    tag2: "Intermediate Level",
    salary: "$15/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://images.unsplash.com/photo-1704204656144-3dd12c110dd8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9uJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    companyName: "Amazon",
    datePosted: "3 days ago",
    position: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$20/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    companyName: "Meta",
    datePosted: "4 days ago",
    position: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    salary: "$12/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    companyName: "Netflix",
    datePosted: "5 days ago",
    position: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Intermediate Level",
    salary: "$18/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    companyName: "Apple",
    datePosted: "6 days ago",
    position: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$25/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/spotify",
    companyName: "Spotify",
    datePosted: "1 week ago",
    position: "Data Analyst",
    tag1: "Part Time",
    tag2: "Intermediate Level",
    salary: "$14/hr",
    location: "Stockholm, Sweden"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Adobe",
    datePosted: "2 weeks ago",
    position: "Product Manager",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$30/hr",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/tesla",
    companyName: "Tesla",
    datePosted: "3 days ago",
    position: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$35/hr",
    location: "Texas, USA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/airbnb",
    companyName: "Airbnb",
    datePosted: "2 days ago",
    position: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    salary: "$16/hr",
    location: "Remote"
  }
];
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,index) {
        return (
          <div key={index}>
            <Card job={elem}/>
          </div>
        );
      })}
    </div>
  )
}

export default App