10.times do |d|
  FreelanceDocument.create!(
    title: "Document #{d}",
    description: 'Kielbasa boudin jowl swine. Corned beef burgdoggen rump, sausage jowl andouille cow ribeye tenderloin filet mignon picanha chuck turducken. Beef andouille fatback swine jerky strip steak tail sausage. Brisket salami short ribs venison kielbasa ribeye, andouille cow picanha shoulder drumstick. Kielbasa prosciutto pig kevin strip steak short ribs ham t-bone leberkas ham hock shankle capicola. Ham pig bacon, fatback short ribs turkey tail alcatra jerky. Strip steak frankfurter leberkas filet mignon kevin.',
    file_url: 'https://docs.google.com/document/d/1UUgAob6ZpivgkgCbMD84JMMRc1flrzCPKybtQoAfASo/edit?usp=sharing',
    image_url: 'https://s3.amazonaws.com/devcamp-static/images/freelance-img.jpg'
  )
end
