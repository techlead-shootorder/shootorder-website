<!DOCTYPE html>
<?php include 'main-header.php'; ?>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TAX Consultants in Hyderabad | GST | TDS Services - Merakhata</title>
    <meta name="description"
    content="Merakhata is an TAX consultant in Hyderabad, India. We are your trusted partners for TDS Compliances, GST Services & Consultancy. Book a consultation today!">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <style>
        .tax-calculator {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-bottom: 30px;
        }

        .nav-tabs .nav-link {
            color: #495057;
            font-weight: 500;
        }

        .nav-tabs .nav-link.active {
            color: #0d6efd;
            font-weight: 600;
        }

        .info-icon {
            color: #0d6efd;
            cursor: pointer;
        }

        .result-section {
            background-color: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin-top: 20px;
        }

        .regime-comparison {
            border-top: 1px solid #dee2e6;
            padding-top: 20px;
            margin-top: 20px;
        }

        .tab-content {
            padding: 20px 0;
        }

        .table-tax-slabs th,
        .table-tax-slabs td {
            padding: 8px 12px;
        }

        .beneficial-regime {
            font-weight: bold;
            padding: 10px;
            border-radius: 5px;
            text-align: center;
            margin-bottom: 15px;
        }

        .tooltip-inner {
            max-width: 300px;
        }

        .form-check-input {
            height: 20px !important;
            border-radius: 50% !important;
        }
        
            :root {
            --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --success-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            --danger-gradient: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
            --card-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            --input-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            min-height: 100vh;
        }

        .calculator-container {
            background: white;
            border-radius: 20px;
            box-shadow: var(--card-shadow);
            overflow: hidden;
            position: relative;
        }

        .calculator-header {
            background: var(--primary-gradient);
            color: white;
            padding: 2rem;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .calculator-header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(180deg); }
        }

        .progress-container {
            background: rgba(255,255,255,0.9);
            padding: 1.5rem;
            position: sticky;
            top: 0;
            z-index: 1000;
            backdrop-filter: blur(10px);
        }

        .progress {
            height: 8px;
            border-radius: 10px;
            background: rgba(0,0,0,0.1);
            overflow: hidden;
        }

        .progress-bar {
            background: var(--success-gradient);
            transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
        }

        .progress-bar::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: progressShine 2s infinite;
        }

        @keyframes progressShine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }

        .step-content {
            padding: 2rem;
            min-height: 400px;
        }

        .form-floating {
            position: relative;
            margin-bottom: 1.5rem;
        }

        .form-control {
            border: 2px solid #e9ecef;
            border-radius: 12px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            background: rgba(255,255,255,0.8);
            backdrop-filter: blur(5px);
        }

        .form-control:focus {
            border-color: #667eea;
            box-shadow: var(--input-shadow);
            transform: translateY(-2px);
            background: white;
        }

        .form-floating > label {
            color: #6c757d;
            transition: all 0.3s ease;
        }

        .form-control:focus ~ label,
        .form-control:not(:placeholder-shown) ~ label {
            color: #667eea;
            font-weight: 600;
        }

        .input-group {
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            margin-bottom: 1.5rem;
        }

        .input-group-text {
            background: var(--primary-gradient);
            color: white;
            border: none;
            font-weight: 600;
        }

        .animate-in {
            animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .btn-gradient {
            background: var(--primary-gradient);
            border: none;
            border-radius: 12px;
            padding: 12px 30px;
            font-weight: 600;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .btn-gradient::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
        }

        .btn-gradient:hover::before {
            left: 100%;
        }

        .btn-gradient:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        .result-card {
            background: white;
            border-radius: 15px;
            box-shadow: var(--card-shadow);
            border: none;
            overflow: hidden;
            transition: transform 0.3s ease;
        }

        .result-card:hover {
            transform: translateY(-5px);
        }

        .regime-old {
            background: linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%);
        }

        .regime-new {
            background: var(--success-gradient);
        }

        .benefit-badge {
            background: var(--danger-gradient);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-weight: 600;
            display: inline-block;
            margin-top: 1rem;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        .insight-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 15px;
            padding: 1.5rem;
            margin-bottom: 1rem;
            animation: fadeInUp 0.8s ease;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .tax-slab-visual {
            position: relative;
            margin: 1rem 0;
        }

        .slab-bar {
            height: 30px;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            margin-bottom: 0.5rem;
            position: relative;
            overflow: hidden;
        }

        .slab-0 { background: linear-gradient(90deg, #28a745, #20c997); }
        .slab-5 { background: linear-gradient(90deg, #ffc107, #fd7e14); }
        .slab-10 { background: linear-gradient(90deg, #fd7e14, #dc3545); }
        .slab-15 { background: linear-gradient(90deg, #dc3545, #6f42c1); }
        .slab-20 { background: linear-gradient(90deg, #6f42c1, #e83e8c); }
        .slab-25 { background: linear-gradient(90deg, #e83e8c, #fd7e14); }
        .slab-30 { background: linear-gradient(90deg, #fd7e14, #dc3545); }

        .loading-spinner {
            display: none;
            text-align: center;
            padding: 2rem;
        }

        .spinner-border {
            width: 3rem;
            height: 3rem;
            border-width: 0.3em;
        }

        .floating-info {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border-radius: 10px;
            padding: 1rem;
            box-shadow: var(--card-shadow);
            z-index: 1001;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }

        .floating-info.show {
            transform: translateX(0);
        }

        .step-nav {
            display: flex;
            justify-content: center;
            margin-bottom: 2rem;
        }

        .step-item {
            display: flex;
            align-items: center;
            margin: 0 1rem;
            transition: all 0.3s ease;
        }

        .step-number {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #e9ecef;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            margin-right: 0.5rem;
            transition: all 0.3s ease;
        }

        .step-item.active .step-number {
            background: var(--primary-gradient);
            color: white;
            transform: scale(1.1);
        }

        .step-item.completed .step-number {
            background: #28a745;
            color: white;
        }

        @media (max-width: 768px) {
            .calculator-container {
                margin: 1rem;
                border-radius: 15px;
            }
            
            .calculator-header {
                padding: 1.5rem;
            }
            
            .step-content {
                padding: 1.5rem;
            }
            
            .step-nav {
                flex-wrap: wrap;
            }
            
            .step-item {
                margin: 0.5rem;
            }
        }
    </style>
</head>

<body>
    <?php include 'header.php'; ?>
    <div class="container py-8">
        <div class="calculator-container animate-in">
            <!-- Header -->
            <div class="calculator-header">
                <h1 class="display-4 mb-2">Merakhata - Smart Tax Calculator</h1>
                <p class="lead mb-0">Calculate your income tax with precision and get personalized insights</p>
            </div>

            <!-- Progress Bar -->
            <!--<div class="progress-container">-->
            <!--    <div class="d-flex justify-content-between align-items-center mb-2">-->
            <!--        <small class="text-muted">Progress</small>-->
            <!--        <small class="text-muted"><span id="currentStep">1</span> of 5</small>-->
            <!--    </div>-->
            <!--    <div class="progress">-->
            <!--        <div class="progress-bar" id="progressBar" role="progressbar" style="width: 20%"></div>-->
            <!--    </div>-->
            <!--</div>-->
        <div class="tax-calculator">
            <ul class="nav nav-tabs" id="taxCalculatorTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="financial-year-tab" data-bs-toggle="tab"
                        data-bs-target="#financial-year" type="button" role="tab" aria-controls="financial-year"
                        aria-selected="true">
                        <i class="bi bi-calendar"></i> Financial Year
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="income-details-tab" data-bs-toggle="tab"
                        data-bs-target="#income-details" type="button" role="tab" aria-controls="income-details"
                        aria-selected="false">
                        <i class="bi bi-cash"></i> Income Details
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="exemptions-tab" data-bs-toggle="tab" data-bs-target="#exemptions"
                        type="button" role="tab" aria-controls="exemptions" aria-selected="false">
                        <i class="bi bi-file-earmark-minus"></i> Exemptions & Allowances
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="deductions-tab" data-bs-toggle="tab" data-bs-target="#deductions"
                        type="button" role="tab" aria-controls="deductions" aria-selected="false">
                        <i class="bi bi-file-earmark-text"></i> Deductions
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="results-tab" data-bs-toggle="tab" data-bs-target="#results"
                        type="button" role="tab" aria-controls="results" aria-selected="false">
                        <i class="bi bi-graph-up"></i> Results
                    </button>
                </li>
            </ul>

            <div class="tab-content" id="taxCalculatorContent">
                <!-- Financial Year Tab -->
                <div class="tab-pane fade show active" id="financial-year" role="tabpanel"
                    aria-labelledby="financial-year-tab">
                    <h4 class="mb-4 text-center">Select Financial Year</h4>
                    <p class="text-center"><strong>FY</strong> - Financial Year (1st April to 31st March)</p>

                       <div class="row justify-content-center">
                        <div class="col-md-6">
                            <div class="card border-0 shadow-sm mb-3 year-option" data-year="2025-26">
                                <div class="card-body text-center">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="financialYear" id="fy2025-26" value="2025-26" checked>
                                        <label class="form-check-label w-100" for="fy2025-26">
                                            <h5 class="mb-1">FY 2025-2026</h5>
                                            <small class="text-muted">1st April 2025 to 31st March 2026</small>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="card border-0 shadow-sm year-option" data-year="2024-25">
                                <div class="card-body text-center">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="financialYear" id="fy2024-25" value="2024-25">
                                        <label class="form-check-label w-100" for="fy2024-25">
                                            <h5 class="mb-1">FY 2024-2025</h5>
                                            <small class="text-muted">1st April 2024 to 31st March 2025</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="button" class="btn btn-gradient btn-lg text-white" onclick="nextTab('income-details-tab')">Next <i
                                class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
                
                
                <!-- Income Details Tab -->
                <div class="tab-pane fade" id="income-details" role="tabpanel" aria-labelledby="income-details-tab">
                    <h4 class="mb-4">Enter Income Details</h4>
                    
                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="grossSalary" placeholder="Gross Salary" min="0" 
                                       data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                                       title="<strong>Gross Salary</strong><br>Your total annual salary before any deductions. Include basic salary, allowances, bonuses, and perquisites. This helps calculate your total taxable income from employment.">
                                <label for="grossSalary"><i class="bi bi-briefcase me-2"></i>Gross Salary</label>
                            </div>

                            <div class="form-floating">
                                <input type="number" class="form-control" id="businessProfit" placeholder="Business Profit" min="0"
                                       data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                                       title="<strong>Business/Professional Income</strong><br>Net profit from your business or professional practice after deducting business expenses. This is crucial for calculating total income if you're self-employed or have side businesses.">
                                <label for="businessProfit"><i class="bi bi-shop me-2"></i>Business Profit</label>
                            </div>

                            <div class="form-floating">
                                <input type="number" class="form-control" id="interestIncome" placeholder="Interest Income" min="0"
                                       data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                                       title="<strong>Interest Income</strong><br>Interest earned from savings accounts, fixed deposits, bonds, and other investments. Note: Interest above ₹10,000 from savings accounts is taxable after 80TTA deduction.">
                                <label for="interestIncome"><i class="bi bi-graph-up me-2"></i>Interest Income</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="dividendIncome" placeholder="Dividend Income" min="0"
                                       data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                                       title="<strong>Dividend Income</strong><br>Dividends received from shares, mutual funds, and other investments. Dividend income is fully taxable in your hands at your applicable tax rate since 2020.">
                                <label for="dividendIncome"><i class="bi bi-pie-chart me-2"></i>Dividend Income</label>
                            </div>

                            <div class="form-floating">
                                <input type="number" class="form-control" id="miscIncome" placeholder="Other Income" min="0"
                                       data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                                       title="<strong>Other Income</strong><br>Any other taxable income like gifts above ₹50,000, lottery winnings, rental income, freelancing income, or capital gains. This ensures complete income disclosure for accurate tax calculation.">
                                <label for="miscIncome"><i class="bi bi-plus-circle me-2"></i>Other Income</label>
                            </div>

                            <div class="insight-card">
                                <h6><i class="bi bi-lightbulb text-warning me-2"></i>Quick Tip</h6>
                                <p class="mb-0 small">Include all sources of income for accurate calculation. Don't worry about exemptions - we'll handle that in the next step!</p>
                            </div>
                        </div>
                    </div>

                    <!--<div class="row mb-3">-->
                    <!--    <div class="col-md-8">-->
                    <!--        <label for="grossSalary" class="form-label">Gross Income From Salary <i-->
                    <!--                class="bi bi-info-circle info-icon" data-bs-toggle="tooltip"-->
                    <!--                title="Total salary (including salary, allowances & perquisites etc) before any exemptions or  deductions."></i></label>-->
                    <!--        <input type="number" class="form-control income-input" id="grossSalary" placeholder="0"-->
                    <!--            min="0">-->
                    <!--    </div>-->
                    <!--</div>-->

                    <!--<div class="row mb-3">-->
                    <!--    <div class="col-md-8">-->
                    <!--        <label for="businessProfit" class="form-label">Profit from Business <i-->
                    <!--                class="bi bi-info-circle info-icon" data-bs-toggle="tooltip"-->
                    <!--                title="Net profit from any business or profession"></i></label>-->
                    <!--        <input type="number" class="form-control income-input" id="businessProfit" placeholder="0"-->
                    <!--            min="0">-->
                    <!--    </div>-->
                    <!--</div>-->

                    <!--<div class="row mb-3">-->
                    <!--    <div class="col-md-8">-->
                    <!--        <label for="interestIncome" class="form-label">Income From Interest <i-->
                    <!--                class="bi bi-info-circle info-icon" data-bs-toggle="tooltip"-->
                    <!--                title="Interest earned from fixed deposits, savings accounts, etc."></i></label>-->
                    <!--        <input type="number" class="form-control income-input" id="interestIncome" placeholder="0"-->
                    <!--            min="0">-->
                    <!--    </div>-->
                    <!--</div>-->

                    <!--<div class="row mb-3">-->
                    <!--    <div class="col-md-8">-->
                    <!--        <label for="dividendIncome" class="form-label">Dividend Income <i-->
                    <!--                class="bi bi-info-circle info-icon" data-bs-toggle="tooltip"-->
                    <!--                title="Income received as dividends from shares and mutual funds"></i></label>-->
                    <!--        <input type="number" class="form-control income-input" id="dividendIncome" placeholder="0"-->
                    <!--            min="0">-->
                    <!--    </div>-->
                    <!--</div>-->

                    <!--<div class="row mb-4">-->
                    <!--    <div class="col-md-8">-->
                    <!--        <label for="miscIncome" class="form-label">Other Miscellaneous Income <i-->
                    <!--                class="bi bi-info-circle info-icon" data-bs-toggle="tooltip"-->
                    <!--                title="Any other taxable income (gifts, winnings, commision etc) ."></i></label>-->
                    <!--        <input type="number" class="form-control income-input" id="miscIncome" placeholder="0"-->
                    <!--            min="0">-->
                    <!--    </div>-->
                    <!--</div>-->

                    <div class="d-grid gap-2 d-md-flex justify-content-md-between">
                        <button type="button" class="btn btn-secondary" onclick="nextTab('financial-year-tab')"><i
                                class="bi bi-arrow-left"></i> Previous</button>
                        <button type="button" class="btn btn-primary" onclick="nextTab('exemptions-tab')">Next <i
                                class="bi bi-arrow-right"></i></button>
                    </div>
                </div>

                <!-- Exemptions & Allowances Tab -->
                <div class="tab-pane fade" id="exemptions" role="tabpanel" aria-labelledby="exemptions-tab">
                    <h4 class="mb-4">Exemptions & Allowances</h4>
                    
 <div class="accordion" id="exemptionsAccordion">
    <!-- HRA Section -->
    <div class="accordion-item border-0 shadow-sm mb-3">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#hraSection">
                <i class="bi bi-house me-2"></i>House Rent Allowance (HRA)
            </button>
        </h2>
        <div id="hraSection" class="accordion-collapse collapse show" data-bs-parent="#exemptionsAccordion">
            <div class="accordion-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="basicSalary" class="form-label">Yearly Basic Salary <i
                                    class="bi bi-info-circle info-icon" data-bs-toggle="tooltip"
                                    title="Basic component of your annual salary"></i></label>
                            <input type="number" class="form-control exemption-input" id="basicSalary"
                                placeholder="0" min="0">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="hraReceived" class="form-label">Yearly HRA Received <i
                                    class="bi bi-info-circle info-icon" data-bs-toggle="tooltip"
                                    title="Total HRA received from employer in a year"></i></label>
                            <input type="number" class="form-control exemption-input" id="hraReceived"
                                placeholder="0" min="0">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="rentPaid" class="form-label">Yearly Rent Paid <i
                                    class="bi bi-info-circle info-icon" data-bs-toggle="tooltip"
                                    title="Total rent paid by you in a year"></i></label>
                            <input type="number" class="form-control exemption-input" id="rentPaid"
                                placeholder="0" min="0">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="cityType" class="form-label">Rental Premises <i
                                    class="bi bi-info-circle info-icon" data-bs-toggle="tooltip"
                                    title="Please select your city of residence, as HRA exemption is calculated at 50% of salary for metro cities & 40% for non-metro cities."></i>
                            </label>
                            <select class="form-control exemption-input" id="cityType">
                                <option value="metro">Metro City (Delhi, Mumbai, Chennai, Kolkata)</option>
                                <option value="non-metro">Non Metro City</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Other Exemptions -->
    <div class="accordion-item border-0 shadow-sm">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#otherExemptions">
                <i class="bi bi-gift me-2"></i>Other Exemptions
            </button>
        </h2>
        <div id="otherExemptions" class="accordion-collapse collapse" data-bs-parent="#exemptionsAccordion">
            <div class="accordion-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="ltaExemption" class="form-label">Leave Travel Allowance <i
                                    class="bi bi-info-circle info-icon" data-bs-toggle="tooltip"
                                    title="LTA/LTC exemption for travel within India as per income tax act 1961 (Exemption allowed only if allowance is part of salary structure)"></i></label>
                            <input type="number" class="form-control exemption-input" id="ltaExemption"
                                placeholder="0" min="0">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="childEducation" class="form-label">Children Education Allowance <i
                                    class="bi bi-info-circle info-icon" data-bs-toggle="tooltip"
                                    title="Exemption for education of children (Rs. 100 per month per child for max 2 children). Exemption allowed only if allowance is part of salary structure"></i></label>
                            <input type="number" class="form-control exemption-input" id="childEducation"
                                placeholder="0" min="0">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="hostelExpenditure" class="form-label">Hostel Expenditure Allowance <i
                                    class="bi bi-info-circle info-icon" data-bs-toggle="tooltip"
                                    title="Exemption for hostel expenditure (Rs. 300 per month per child for max 2 children). Exemption allowed only if allowance is part of salary structure"></i></label>
                            <input type="number" class="form-control exemption-input" id="hostelExpenditure"
                                placeholder="0" min="0">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="otherAllowance" class="form-label">Any Other Allowance <i
                                    class="bi bi-info-circle info-icon" data-bs-toggle="tooltip"
                                    title="Conveyance Allowance, Transport Allowance, Daily Allowance etc wherever applicable. (Exemption allowed only if allowance is part of salary structure)"></i></label>
                            <input type="number" class="form-control exemption-input" id="otherAllowance"
                                placeholder="0" min="0">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

                    

                    <div class="d-grid gap-2 d-md-flex justify-content-md-between">
                        <button type="button" class="btn btn-secondary" onclick="nextTab('income-details-tab')"><i
                                class="bi bi-arrow-left"></i> Previous</button>
                        <button type="button" class="btn btn-primary" onclick="nextTab('deductions-tab')">Next <i
                                class="bi bi-arrow-right"></i></button>
                    </div>
                </div>

                <!-- Deductions Tab -->
                <div class="tab-pane fade" id="deductions" role="tabpanel" aria-labelledby="deductions-tab">
                    <h4 class="mb-4">Deductions under Various Sections <i class="bi bi-info-circle info-icon"
                            data-bs-toggle="tooltip"
                            title="Deduction is allowed as per limits prescribed under the Income Tax Act, subject to actual contribution or investment made"></i>
                    </h4>
                    
                    <div>
                         <div class="card-body">
            <div class="row g-3">
                <div class="col-md-3">
                    <div class="form-floating">
                        <input type="number" class="form-control" id="sec80c" placeholder="80C" min="0" max="150000"
                               data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                               title="<strong>Section 80C</strong><br>PPF, ELSS, Life Insurance Premium, Tax Saving FD, etc. (Max ₹1,50,000)">
                        <label for="sec80c"><i class="bi bi-graph-up text-primary me-1"></i>80C - Investments</label>
                    </div>
                    <small class="text-muted">Max: ₹1,50,000</small>
                </div>
                
                <div class="col-md-3">
                    <div class="form-floating">
                        <input type="number" class="form-control" id="sec80ccd" placeholder="80CCD" min="0" max="50000"
                               data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                               title="<strong>Section 80CCD(1B)</strong><br>National Pension Scheme contribution (additional ₹50,000)">
                        <label for="sec80ccd"><i class="bi bi-shield-check text-success me-1"></i>80CCD - NPS</label>
                    </div>
                    <small class="text-muted">Max: ₹50,000</small>
                </div>
                
                <div class="col-md-3">
                    <div class="form-floating">
                        <input type="number" class="form-control" id="sec80ccd2" placeholder="80CCD(2)" min="0"
                               data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                               title="<strong>Section 80CCD(2)</strong><br>Employer's contribution to NPS (As per income tax act)">
                        <label for="sec80ccd2"><i class="bi bi-building text-info me-1"></i>80CCD(2) - Employer</label>
                    </div>
                    <small class="text-muted">No limit</small>
                </div>
                
                <div class="col-md-3">
                    <div class="form-floating">
                        <input type="number" class="form-control" id="sec80e" placeholder="80E" min="0"
                               data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                               title="<strong>Section 80E</strong><br>Interest paid on education loan (No upper limit)">
                        <label for="sec80e"><i class="bi bi-mortarboard text-warning me-1"></i>80E - Education Loan</label>
                    </div>
                    <small class="text-muted">No limit</small>
                </div>
            </div>
        </div>
    </div>
<div class="row">
<div class="card border-0 shadow-sm mb-4 col">
    <div class="card-header bg-success text-white">
        <h5 class="mb-0"><i class="bi bi-heart-pulse me-2"></i>Medical Insurance (Section 80D)</h5>
    </div>
    <div class="card-body">
        <div class="row g-3">
            <div class="col-md-6">
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="sec80dSelf" placeholder="Self/Spouse/Children (Below 60)" min="0" max="25000"
                           data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                           title="<strong>80D - Self/Family (Below 60)</strong><br>Medical Insurance Premium for Self, Spouse, and Dependent Children (all below 60 years). Max ₹25,000">
                    <label for="sec80dSelf"><i class="bi bi-people text-primary me-1"></i>Self/Spouse/Children (Below 60)</label>
                </div>
                <small class="text-muted d-block mb-3">Max: ₹25,000</small>
                
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="sec80dParentsNonSenior" placeholder="Parents (Non-Senior)" min="0" max="25000"
                           data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                           title="<strong>80D - Parents (Non-Senior)</strong><br>Medical Insurance Premium for Parents (Non Senior Citizen). Max ₹25,000">
                    <label for="sec80dParentsNonSenior"><i class="bi bi-person-hearts text-danger me-1"></i>Parents (Non-Senior)</label>
                </div>
                <small class="text-muted d-block">Max: ₹25,000</small>
            </div>
            
            <div class="col-md-6">
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="sec80dAbove" placeholder="Self/Spouse/Children (60+)" min="0" max="50000"
                           data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                           title="<strong>80D - Self/Family (60+)</strong><br>Medical Insurance Premium for Self, Spouse, and Dependent Children (if anyone is 60 years or above). Max ₹50,000">
                    <label for="sec80dAbove"><i class="bi bi-people-fill text-primary me-1"></i>Self/Spouse/Children (60+)</label>
                </div>
                <small class="text-muted d-block mb-3">Max: ₹50,000</small>
                
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="sec80dParentsSenior" placeholder="Parents (Senior Citizen)" min="0" max="50000"
                           data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                           title="<strong>80D - Parents (Senior)</strong><br>Medical Insurance Premium for Parents (Senior Citizen). Max ₹50,000">
                    <label for="sec80dParentsSenior"><i class="bi bi-person-check text-danger me-1"></i>Parents (Senior Citizen)</label>
                </div>
                <small class="text-muted d-block">Max: ₹50,000</small>
            </div>
        </div>
        
        <!-- Information Alert -->
        <div class="alert alert-info mt-3 mb-0" role="alert">
            <i class="bi bi-info-circle me-2"></i>
            <strong>Important:</strong> Use either "Below 60" or "60+" category for self/spouse/children, not both. Choose the category that applies to your family situation.
        </div>
    </div>
</div>

<!-- Donations & Other Deductions -->
<div class="card border-0 shadow-sm mb-4 col">
    <div class="card-header bg-info text-white">
        <h5 class="mb-0"><i class="bi bi-gift me-2"></i>Donations & Other Deductions</h5>
    </div>
    <div class="card-body">
        <div class="row g-3">
            <div class="col-md-6">
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="sec80g100" placeholder="80G (100%)" min="0"
                           data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                           title="<strong>Section 80G (100%)</strong><br>Donations to PM CARES Fund, Chief Minister's Relief Fund, National Defense Fund, etc. Get 100% deduction on donated amount.">
                    <label for="sec80g100"><i class="bi bi-award text-warning me-1"></i>80G - 100% Benefit</label>
                </div>
                <small class="text-muted d-block mb-3">100% deduction</small>
                
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="sec80tta" placeholder="80TTA" min="0" max="10000"
                           data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                           title="<strong>Section 80TTA</strong><br>Interest earned from Savings bank account. Maximum deduction ₹10,000. Not available in new tax regime.">
                    <label for="sec80tta"><i class="bi bi-bank text-success me-1"></i>80TTA - Savings Interest</label>
                </div>
                <small class="text-muted d-block">Max: ₹10,000</small>
            </div>
            
            <div class="col-md-6">
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="sec80g50" placeholder="80G (50%)" min="0"
                           data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                           title="<strong>Section 80G (50%)</strong><br>Donations to approved charitable institutions, religious trusts, educational institutions. Get 50% deduction on donated amount.">
                    <label for="sec80g50"><i class="bi bi-heart text-danger me-1"></i>80G - 50% Benefit</label>
                </div>
                <small class="text-muted d-block mb-3">50% deduction</small>
                
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="otherDeductions" placeholder="Other Deductions" min="0"
                           data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                           title="<strong>Other Deductions u/s 80</strong><br>Any other deductions under various sections like 80GG (House Rent), 80U (Disability), 80RRB (Patent Royalty), etc.">
                    <label for="otherDeductions"><i class="bi bi-plus-circle text-secondary me-1"></i>Other u/s 80</label>
                </div>
                <small class="text-muted d-block">As applicable</small>
            </div>
        </div>
        
        <!-- Tips Alert -->
        <div class="alert alert-warning mt-3 mb-0" role="alert">
            <i class="bi bi-lightbulb me-2"></i>
            <strong>Tip:</strong> Keep 80G certificates for donations and ensure the organization is eligible for tax benefits. 80TTA is only for old tax regime.
        </div>
    </div>
</div>
</div>
    <!-- Housing & Professional Tax -->
    <div class="card border-0 shadow-sm mb-4 ">
        <div class="card-header bg-warning text-dark">
            <h5 class="mb-0"><i class="bi bi-house me-2"></i>Housing & Professional Tax</h5>
        </div>
        <div class="card-body">
            <div class="row g-3">
                <div class="col-md-6">
                    <div class="form-floating">
                        <input type="number" class="form-control" id="sec24b" placeholder="24B" min="0" max="200000"
                               data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                               title="<strong>Section 24B</strong><br>Interest paid on home loan (up to ₹2,00,000)">
                        <label for="sec24b"><i class="bi bi-house-door text-primary me-1"></i>24B - Home Loan Interest</label>
                    </div>
                    <small class="text-muted">Max: ₹2,00,000</small>
                </div>
                
                <div class="col-md-6">
                    <div class="form-floating">
                        <input type="number" class="form-control" id="professionalTax" placeholder="Professional Tax" min="0"
                               data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                               title="<strong>Professional Tax</strong><br>Professional tax paid to state government">
                        <label for="professionalTax"><i class="bi bi-briefcase text-info me-1"></i>Professional Tax</label>
                    </div>
                    <small class="text-muted">As per state rules</small>
                </div>
            </div>
        </div>
    </div>

    <!-- Summary Card -->
    <div class="alert alert-light border-0 shadow-sm">
        <div class="row align-items-center">
            <div class="col-md-8">
                <h6 class="mb-2"><i class="bi bi-lightbulb text-warning me-2"></i>Tax Saving Tips</h6>
                <ul class="mb-0 small">
                    <li>Max out 80C (₹1.5L) and 80CCD(1B) (₹50K) for highest savings</li>
                    <li>Choose appropriate medical insurance category (below/above 60)</li>
                    <li>Don't use both self categories - they're mutually exclusive</li>
                    <li>Keep all investment receipts and certificates</li>
                </ul>
            </div>
            <div class="col-md-4 text-end">
                <div class="bg-light p-3 rounded">
                    <h6 class="text-muted mb-1">Maximum Possible Savings</h6>
                    <h4 class="text-success mb-0">₹3,35,000</h4>
                    <small class="text-muted">80C + 80CCD + 80D + Others</small>
                </div>
            </div>
                    </div>
                    </div>

                
                    
                    

                    <div class="d-grid gap-2 d-md-flex justify-content-md-between">
                        <button type="button" class="btn btn-secondary" onclick="nextTab('exemptions-tab')"><i
                                class="bi bi-arrow-left"></i> Previous</button>
                        <button type="button" class="btn btn-primary" id="calculateTax">Calculate Tax <i
                                class="bi bi-calculator"></i></button>
                    </div>
                </div>
               
                <!-- Results Tab -->
               <div class="tab-pane fade" id="results" role="tabpanel" aria-labelledby="results-tab">
    <!-- Header Section -->
    <div class="text-center mb-4">
        <!--<i class="bi bi-graph-up display-1 text-success"></i>-->
        <h3 class="mt-3">Your Tax Calculation Results</h3>
        <div id="financialYearDisplay" class="badge bg-primary fs-6 mb-3"></div>
    </div>

    <!-- Key Insights Hero Section -->
    <div class="row mb-4">
        <div class="col-12">
            <div class="card border-0 shadow-lg" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                <div class="card-body py-4">
                    <div class="row align-items-center">
                        <div class="col-md-8">
                            <h4 class="mb-2">
                                <i class="bi bi-trophy me-2"></i>
                                Recommended: <span id="beneficialRegime">Old Regime</span>
                            </h4>
                            <p class="mb-2 lead">
                                <span id="taxBenefit" class="fw-bold"></span>
                            </p>
                            <small class="opacity-75">Based on your income and deductions profile</small>
                        </div>
                        <div class="col-md-4 text-center">
                            <div class="bg-white bg-opacity-20 rounded p-3">
                                <h6 class="mb-1">Effective Tax Rate</h6>
                                <h3 class="mb-0" id="effectiveTaxRate">0%</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Quick Stats Cards -->
    <!--<div class="row mb-4">-->
    <!--    <div class="col-md-3">-->
    <!--        <div class="card border-0 shadow-sm h-100">-->
    <!--            <div class="card-body text-center">-->
    <!--                <i class="bi bi-currency-rupee display-4 text-primary mb-2"></i>-->
    <!--                <h6 class="text-muted">Total Income</h6>-->
    <!--                <h4 class="text-primary mb-0">₹<span id="totalIncomeDisplay">0</span></h4>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->
    <!--    <div class="col-md-3">-->
    <!--        <div class="card border-0 shadow-sm h-100">-->
    <!--            <div class="card-body text-center">-->
    <!--                <i class="bi bi-piggy-bank display-4 text-success mb-2"></i>-->
    <!--                <h6 class="text-muted">Tax Saved</h6>-->
    <!--                <h4 class="text-success mb-0">₹<span id="taxSavedAmount">0</span></h4>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->
    <!--    <div class="col-md-3">-->
    <!--        <div class="card border-0 shadow-sm h-100">-->
    <!--            <div class="card-body text-center">-->
    <!--                <i class="bi bi-calendar-month display-4 text-info mb-2"></i>-->
    <!--                <h6 class="text-muted">Monthly Tax</h6>-->
    <!--                <h4 class="text-info mb-0">₹<span id="monthlyTaxAmount">0</span></h4>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->
    <!--    <div class="col-md-3">-->
    <!--        <div class="card border-0 shadow-sm h-100">-->
    <!--            <div class="card-body text-center">-->
    <!--                <i class="bi bi-wallet2 display-4 text-warning mb-2"></i>-->
    <!--                <h6 class="text-muted">Take Home</h6>-->
    <!--                <h4 class="text-warning mb-0">₹<span id="takeHomeAmount">0</span></h4>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->
    <!--</div>-->

    <!-- Detailed Comparison -->
    <div class="row mb-4">
        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-header bg-gradient text-white" style="background: linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%);">
                    <h5 class="mb-0"><i class="bi bi-shield-fill me-2"></i>Old Tax Regime</h5>
                </div>
                <div class="card-body">
                    <table class="table table-sm" id="showExtraRowForOld">
                        <tr>
                            <td><i class="bi bi-currency-rupee text-muted me-1"></i>Total Income</td>
                            <td class="text-end fw-bold">₹<span id="oldRegimeTotalIncome">0</span></td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-calculator text-muted me-1"></i>Taxable Income</td>
                            <td class="text-end">₹<span id="oldRegimeTaxableIncome">0</span></td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-percent text-muted me-1"></i>Income Tax</td>
                            <td class="text-end">₹<span id="oldRegimeIncomeTax">0</span></td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-plus-circle text-muted me-1"></i>Surcharge</td>
                            <td class="text-end">₹<span id="oldRegimeSurcharge">0</span></td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-dash-circle text-muted me-1"></i>Marginal Relief</td>
                            <td class="text-end text-success">-₹<span id="oldMarginalRelief">0</span></td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-plus text-muted me-1"></i>Health & Education Cess</td>
                            <td class="text-end">₹<span id="oldRegimeCess">0</span></td>
                        </tr>
                        <tr class="table-warning">
                            <td class="fw-bold"><i class="bi bi-calculator-fill text-primary me-1"></i>Total Tax Liability</td>
                            <td class="text-end fw-bold text-danger">₹<span id="oldRegimeTotalTax">0</span></td>
                        </tr>
                    </table>
                    
                    <div class="mt-3">
                        <div class="d-flex justify-content-between small text-muted">
                            <span>Deductions Used:</span>
                            <span>₹<span id="oldRegimeDeductions">0</span></span>
                        </div>
                        <div class="progress mt-2" style="height: 8px;">
                            <div class="progress-bar bg-warning" id="oldRegimeProgress" style="width: 0%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-header bg-gradient text-white" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
                    <h5 class="mb-0"><i class="bi bi-lightning-fill me-2"></i>New Tax Regime</h5>
                </div>
                <div class="card-body">
                    <table class="table table-sm" id="showExtraRowForNew">
                        <tr>
                            <td><i class="bi bi-currency-rupee text-muted me-1"></i>Total Income</td>
                            <td class="text-end fw-bold">₹<span id="newRegimeTotalIncome">0</span></td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-calculator text-muted me-1"></i>Taxable Income</td>
                            <td class="text-end">₹<span id="newRegimeTaxableIncome">0</span></td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-percent text-muted me-1"></i>Income Tax</td>
                            <td class="text-end">₹<span id="newRegimeIncomeTax">0</span></td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-plus-circle text-muted me-1"></i>Surcharge</td>
                            <td class="text-end">₹<span id="newRegimeSurcharge">0</span></td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-dash-circle text-muted me-1"></i>Marginal Relief</td>
                            <td class="text-end text-success">-₹<span id="newMarginalRelief">0</span></td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-plus text-muted me-1"></i>Health & Education Cess</td>
                            <td class="text-end">₹<span id="newRegimeCess">0</span></td>
                        </tr>
                        <tr class="table-info">
                            <td class="fw-bold"><i class="bi bi-calculator-fill text-primary me-1"></i>Total Tax Liability</td>
                            <td class="text-end fw-bold text-danger">₹<span id="newRegimeTotalTax">0</span></td>
                        </tr>
                    </table>
                    
                    <div class="mt-3">
                        <div class="d-flex justify-content-between small text-muted">
                            <span>Standard Deduction:</span>
                            <span>₹75,000</span>
                        </div>
                        <div class="progress mt-2" style="height: 8px;">
                            <div class="progress-bar bg-info" id="newRegimeProgress" style="width: 0%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Tax Slab Breakdown -->
    <div class="card border-0 shadow-sm mb-4">
        <div class="card-header bg-light">
            <h5 class="mb-0"><i class="bi bi-bar-chart-steps me-2"></i>Tax Slab Breakdown</h5>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    <h6 class="text-warning mb-3"><i class="bi bi-shield-fill me-1"></i>Old Tax Regime Slabs</h6>
                    <table class="table table-sm table-hover">
                        <thead class="table-light">
                            <tr>
                                <th>Income Range</th>
                                <th>Rate</th>
                                <th class="text-end">Tax Amount</th>
                            </tr>
                        </thead>
                        <tbody id="oldRegimeSlabDetails">
                            <tr>
                                <td>Up to ₹2,50,000</td>
                                <td><span class="badge bg-success">0%</span></td>
                                <td class="text-end">₹0</td>
                            </tr>
                            <tr>
                                <td>₹2,50,001 - ₹5,00,000</td>
                                <td><span class="badge bg-primary">5%</span></td>
                                <td class="text-end">₹0</td>
                            </tr>
                            <tr>
                                <td>₹5,00,001 - ₹10,00,000</td>
                                <td><span class="badge bg-warning">20%</span></td>
                                <td class="text-end">₹0</td>
                            </tr>
                            <tr>
                                <td>Above ₹10,00,000</td>
                                <td><span class="badge bg-danger">30%</span></td>
                                <td class="text-end">₹0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="col-md-6">
                    <h6 class="text-info mb-3"><i class="bi bi-lightning-fill me-1"></i>New Tax Regime Slabs</h6>
                    <table class="table table-sm table-hover">
                        <thead class="table-light">
                            <tr>
                                <th>Income Range</th>
                                <th>Rate</th>
                                <th class="text-end">Tax Amount</th>
                            </tr>
                        </thead>
                        <tbody id="newRegimeSlabDetails">
                            <!-- Dynamic content based on FY selection -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Actionable Insights -->
    <div class="row mb-4">
        <div class="col-md-8">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-header bg-gradient text-white" style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);">
                    <h5 class="mb-0"><i class="bi bi-lightbulb me-2"></i>Personalized Tax Optimization Tips</h5>
                </div>
                <div class="card-body">
                    <div id="taxOptimizationTips">
                        <!-- Dynamic tips will be populated here -->
                    </div>
                </div>
            </div>
        </div>
        
        <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-header bg-info text-white">
                    <h6 class="mb-0"><i class="bi bi-calendar-check me-2"></i>Important Dates</h6>
                </div>
                <div class="card-body">
                    <div class="timeline">
                        <div class="timeline-item mb-3">
                            <div class="timeline-marker bg-warning"></div>
                            <div class="timeline-content">
                                <h6 class="mb-1">ITR Filing</h6>
                                <small class="text-muted">July 31, 2025</small>
                            </div>
                        </div>
                        <div class="timeline-item mb-3">
                            <div class="timeline-marker bg-info"></div>
                            <div class="timeline-content">
                                <h6 class="mb-1">Advance Tax</h6>
                                <small class="text-muted">March 15, 2025</small>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-marker bg-success"></div>
                            <div class="timeline-content">
                                <h6 class="mb-1">Tax Saving</h6>
                                <small class="text-muted">March 31, 2025</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Professional Help CTA -->
    <div class="card border-0 shadow-lg mb-4" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <div class="card-body py-4">
            <div class="row align-items-center">
                <div class="col-md-8">
                    <h4 class="mb-2"><i class="bi bi-award me-2"></i>Need Professional Tax Assistance?</h4>
                    <p class="mb-3 lead">Get expert help for complex tax situations, GST compliance, and tax planning strategies.</p>
                    <div class="row text-center">
                        <div class="col-md-4 mb-2">
                            <div class="d-flex align-items-center justify-content-center justify-content-md-start">
                                <i class="bi bi-check-circle me-2"></i>
                                <span>Tax Planning</span>
                            </div>
                        </div>
                        <div class="col-md-4 mb-2">
                            <div class="d-flex align-items-center justify-content-center justify-content-md-start">
                                <i class="bi bi-check-circle me-2"></i>
                                <span>GST Compliance</span>
                            </div>
                        </div>
                        <div class="col-md-4 mb-2">
                            <div class="d-flex align-items-center justify-content-center justify-content-md-start">
                                <i class="bi bi-check-circle me-2"></i>
                                <span>ITR Filing</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-center">
                    <a href="https://www.merakhata.com/" target="_blank" class="btn btn-light btn-lg px-4 py-3 mb-3" style="border-radius: 25px; font-weight: 600; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                        <i class="bi bi-telephone me-2"></i>Get Expert Help
                    </a>
                    <div class="small opacity-75">
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        Trusted by 1000+ clients
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Action Buttons -->
    <div class="d-flex flex-wrap gap-3 justify-content-center mb-4">
        <button type="button" class="btn btn-outline-primary" onclick="downloadTaxReport()">
            <i class="bi bi-download me-2"></i>Download Report
        </button>
        <button type="button" class="btn btn-outline-success" onclick="shareTaxResults()">
            <i class="bi bi-share me-2"></i>Share Results
        </button>
        <button type="button" class="btn btn-outline-info" onclick="emailResults()">
            <i class="bi bi-envelope me-2"></i>Email Summary
        </button>
        <button type="button" class="btn btn-primary" onclick="resetForm()">
            <i class="bi bi-arrow-counterclockwise me-2"></i>Calculate Again
        </button>
    </div>

    <!-- Disclaimer -->
    <div class="alert alert-warning border-0 shadow-sm">
        <div class="row align-items-center">
            <div class="col-md-1 text-center">
                <i class="bi bi-exclamation-triangle display-4 text-warning"></i>
            </div>
            <div class="col-md-11">
                <h6 class="alert-heading">Important Disclaimer</h6>
                <p class="mb-0">This calculator provides estimates based on current tax laws and your inputs. Actual tax liability may vary. Please consult a qualified tax professional for personalized advice. Tax laws are subject to change.</p>
            </div>
        </div>
    </div>
</div>

<style>
.timeline {
    position: relative;
}

.timeline-item {
    display: flex;
    align-items: flex-start;
    position: relative;
}

.timeline-marker {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 15px;
    margin-top: 5px;
    flex-shrink: 0;
}

.timeline-item:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 20px;
    width: 2px;
    height: calc(100% + 8px);
    background-color: #dee2e6;
}

.progress {
    border-radius: 10px;
    background-color: rgba(0,0,0,0.1);
}

.card {
    transition: transform 0.2s ease;
}

.card:hover {
    transform: translateY(-2px);
}

.table td {
    border: none;
    padding: 0.5rem 0.75rem;
}

.table tr:last-child td {
    border-bottom: 2px solid #dee2e6;
}

.badge {
    font-size: 0.75em;
}

@media (max-width: 768px) {
    .display-1 {
        font-size: 3rem;
    }
    
    .display-4 {
        font-size: 1.5rem;
    }
    
    .card-body {
        padding: 1rem;
    }
}
</style>

<script>
// Only keep UI-related functions, remove all tax calculation logic
function downloadTaxReport() {
    alert('Tax report download feature will be implemented');
}

function shareTaxResults() {
    if (navigator.share) {
        navigator.share({
            title: 'My Tax Calculation Results',
            text: 'Check out my tax calculation results!',
            url: window.location.href
        });
    } else {
        alert('Share functionality will be implemented');
    }
}

function emailResults() {
    alert('Email summary feature will be implemented');
}
</script>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="./calculate.js"></script>
    </div>
    <?php include 'main-footer.php'; ?>
</body>

</html>