10.times do |p|
  Proposal.create!(
    customer: "Customer #{p}",
    portfolio_url: 'http://sebvillarreal.com',
    tools: 'Ruby on Rails, Angular 2, Postgres',
    estimated_hours: (80 + p),
    hourly_rate: 120,
    weeks_to_complete: (8 + p),
    client_email: 'client@example.com',
  )
end

# rails g scaffold Proposal customer:string portfolio_url:string tools:string estimated_hours:decimal hourly_rate:decimal weeks_to_complete:integer client_email:string
