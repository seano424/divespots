import Card from './Card'
export default function Cards() {
  return (
    <main>
      <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-8">
        <Card />
        <Card
          image="https://images.unsplash.com/photo-1601871925712-3c803d50fa72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          country="Mexico"
          city="Playa del Carmen"
          weather={{ temperature: '22' }}
          attributes={{ fun: '80', weather: '60', safety: '60' }}
        />
        <Card
          image="https://images.unsplash.com/photo-1595517930215-d2778a56ac93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80"
          country="Ecuador"
          city="Galapagos Islands"
          weather={{ temperature: '22' }}
          attributes={{ fun: '80', weather: '80', safety: '80' }}
        />
        <Card
          image="https://images.unsplash.com/photo-1595749002415-cb53c9ba55e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
          country="French Polynesia"
          city="Moorea, Moorea-Maiao"
          weather={{ temperature: '22' }}
          attributes={{ fun: '80', weather: '90', safety: '80' }}
        />
        <Card
          image="https://images.unsplash.com/photo-1580541631971-a0e8ce42e97f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80"
          country="Bahamas"
          city="Tiger Beach"
          weather={{ temperature: '22' }}
          attributes={{ fun: '80', weather: '90', safety: '90' }}
        />
        <Card
          image="https://images.unsplash.com/photo-1542047078441-229be3aa1f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          country="Thailand"
          city="Andaman Sea"
          weather={{ temperature: '22' }}
          attributes={{ fun: '80', weather: '80', safety: '70' }}
        />
      </div>
    </main>
  )
}
