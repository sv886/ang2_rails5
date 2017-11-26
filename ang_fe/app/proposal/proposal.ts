// Note we're using a Class w Proposal model,
// not an Interface like we used w Documents.

export class Proposal {
  constructor(
    public id?: number,
    public customer?: string,
    public portfolio_url: string = 'http://',
    public tools?: string,
    public estimated_hours?: number,
    public hourly_rate?: number,
    public weeks_to_complete?: number,
    public client_email?: string,
  ) {}
}

// Sample record might look asi:
// 15, 'Abc Company', 'http://portfolio.joe-schmo.com', 'Ruby on Rails',
// 150, 120, 15, 'john@doe.com'
